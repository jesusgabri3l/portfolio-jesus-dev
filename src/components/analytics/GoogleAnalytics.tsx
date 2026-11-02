"use client";

import { useEffect } from "react";
import {
  CONSENT_CHANGE_EVENT,
  hasGlobalPrivacyControl,
  readStoredConsent,
  type ConsentChoice,
} from "@/lib/consent";
import { GA_MEASUREMENT_ID } from "@/lib/site";

// Consent Mode v2 básico: gtag.js no se descarga hasta que la persona acepta (CO + UE).
// Nada sale a Google antes del consentimiento; con GPC nunca se carga.
let loaded = false;

function loadGoogleAnalytics() {
  if (loaded) return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js espera el objeto arguments, no un array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function GoogleAnalytics() {
  useEffect(() => {
    if (hasGlobalPrivacyControl()) return;
    if (readStoredConsent() === "granted") loadGoogleAnalytics();

    const onConsentChange = (event: Event) => {
      if ((event as CustomEvent<ConsentChoice>).detail === "granted") loadGoogleAnalytics();
    };
    window.addEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
  }, []);

  return null;
}
