"use client";

import { useEffect } from "react";
import type { CLSMetricWithAttribution, INPMetricWithAttribution, LCPMetricWithAttribution } from "web-vitals/attribution";
import {
  CONSENT_CHANGE_EVENT,
  readStoredConsent,
  hasGlobalPrivacyControl,
  type ConsentChoice,
} from "@/lib/consent";

type MetricWithAttribution = CLSMetricWithAttribution | INPMetricWithAttribution | LCPMetricWithAttribution;

// RUM: LCP/INP/CLS -> GA4. Solo se registra con analytics_storage concedido.
export function WebVitalsReporter() {
  useEffect(() => {
    let registered = false;

    const register = async () => {
      if (registered) return;
      registered = true;
      const { onCLS, onINP, onLCP } = await import("web-vitals/attribution");
      const send = (metric: MetricWithAttribution) => {
        const attribution = metric.attribution as Record<string, unknown>;
        const target =
          attribution.interactionTarget ?? attribution.largestShiftTarget ?? attribution.target ?? "";
        window.gtag?.("event", metric.name, {
          value: Math.round(metric.name === "CLS" ? metric.delta * 1000 : metric.delta),
          metric_id: metric.id,
          metric_value: metric.value,
          metric_rating: metric.rating,
          debug_target: String(target),
          non_interaction: true,
        });
      };
      onLCP(send);
      onINP(send);
      onCLS(send);
    };

    if (readStoredConsent() === "granted" && !hasGlobalPrivacyControl()) void register();

    const onConsentChange = (event: Event) => {
      if ((event as CustomEvent<ConsentChoice>).detail === "granted") void register();
    };
    window.addEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
  }, []);

  return null;
}
