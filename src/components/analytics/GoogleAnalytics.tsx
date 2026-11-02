import Script from "next/script";
import { CONSENT_STORAGE_KEY } from "@/lib/consent";
import { GA_MEASUREMENT_ID } from "@/lib/site";

// Consent Mode v2: todo en "denied" por defecto; la decisión guardada o GPC se aplica antes del primer config.
const consentBootstrap = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
try {
  var stored = JSON.parse(localStorage.getItem('${CONSENT_STORAGE_KEY}') || 'null');
  var gpc = navigator.globalPrivacyControl === true;
  if (stored && stored.choice === 'granted' && !gpc) gtag('consent','update',{analytics_storage:'granted'});
} catch (e) {}
gtag('js', new Date());
gtag('config','${GA_MEASUREMENT_ID}');
`;

export function GoogleAnalytics() {
  return (
    <>
      {/* afterInteractive: beforeInteractive en un layout con [lang] se re-renderiza en cliente al cambiar de idioma y React avisa del <script>. El orden se mantiene porque gtag.js procesa la cola de dataLayer en orden. */}
      <Script id="ga-consent-bootstrap" strategy="afterInteractive">
        {consentBootstrap}
      </Script>
      <Script
        id="ga-library"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
