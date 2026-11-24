import type { Lang } from "@/lib/site";

export const quoteContent: Record<
  Lang,
  {
    seoTitle: string;
    seoDescription: string;
    back: string;
    title: string;
    intro: string;
    labels: { name: string; business: string; need: string; contact: string };
    placeholders: { business: string; need: string; contact: string };
    submit: string;
    sending: string;
    success: { title: string; text: string };
    errors: { generic: string; captcha: string; confirmHuman: string };
  }
> = {
  es: {
    seoTitle: "Cotiza tu proyecto web | Jesús Gabriel Ahumada",
    seoDescription:
      "Cuéntame qué necesitas (página web, app web u otra solución) y te respondo con una cotización. Desarrollo web freelance desde Barranquilla, Colombia.",
    back: "Volver al portafolio",
    title: "Cotiza tu proyecto",
    intro: "Cuéntame sobre tu negocio y lo que necesitas. Te respondo con una cotización.",
    labels: { name: "Tu nombre", business: "Tu negocio", need: "¿Qué necesitas?", contact: "WhatsApp o correo" },
    placeholders: { business: "Café Brisa, cafetería en Bogotá", need: "Una página para mostrar el menú y recibir pedidos", contact: "300 123 4567 o tu@correo.com" },
    submit: "Enviar solicitud",
    sending: "Enviando...",
    success: { title: "Recibido", text: "Gracias. Reviso tu solicitud y te escribo con la cotización." },
    errors: {
      generic: "No se pudo enviar. Revisa los datos (el contacto debe ser un WhatsApp o correo válido) e inténtalo de nuevo.",
      captcha: "Confirma que eres una persona e inténtalo de nuevo.",
      confirmHuman: "Espera a que termine la verificación e inténtalo de nuevo.",
    },
  },
  en: {
    seoTitle: "Get a quote for your web project | Jesus Gabriel Ahumada",
    seoDescription:
      "Tell me what you need (website, web app or another solution) and I will reply with a quote. Freelance web development from Barranquilla, Colombia.",
    back: "Back to portfolio",
    title: "Get a quote",
    intro: "Tell me about your business and what you need. I will reply with a quote.",
    labels: { name: "Your name", business: "Your business", need: "What do you need?", contact: "WhatsApp or email" },
    placeholders: { business: "Brisa Cafe, coffee shop in Bogota", need: "A website to show the menu and take orders", contact: "+57 300 123 4567 or you@email.com" },
    submit: "Send request",
    sending: "Sending...",
    success: { title: "Received", text: "Thanks. I will review your request and write back with a quote." },
    errors: {
      generic: "Could not send. Check the details (contact must be a valid WhatsApp number or email) and try again.",
      captcha: "Please confirm you are human and try again.",
      confirmHuman: "Wait for the verification to finish and try again.",
    },
  },
};
