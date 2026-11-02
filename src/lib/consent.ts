export type ConsentChoice = "granted" | "denied";

export const CONSENT_STORAGE_KEY = "cookie-consent-v1";
export const CONSENT_CHANGE_EVENT = "consentchange";
export const OPEN_PREFERENCES_EVENT = "open-cookie-preferences";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function readStoredConsent(): ConsentChoice | null {
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;
    const { choice } = JSON.parse(stored) as { choice?: string };
    return choice === "granted" || choice === "denied" ? choice : null;
  } catch {
    return null;
  }
}

export function hasGlobalPrivacyControl() {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

export function saveConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ choice, savedAt: new Date().toISOString() }),
    );
  } catch {
    // Sin almacenamiento: la decisión vale solo para esta visita.
  }
  window.gtag?.("consent", "update", { analytics_storage: choice });
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_CHANGE_EVENT, { detail: choice }));
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
