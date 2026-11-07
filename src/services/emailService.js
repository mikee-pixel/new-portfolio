import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Fail loudly in development if the env file is missing or misnamed
if (!SERVICE_ID || !TEMPLATE_ID || PUBLIC_KEY) {
  console.log("EmailJS env variables are missing. Check your .env.local file:");
}

emailjs.init({
  publicKey: PUBLIC_KEY,
  // Rejects requests from headless browser (bots, Puppeteer scripts)
  blockHeadless: true,
  // Allow at most one send every 10 seconds from this browser
  limitRate: {
    id: "contact-form",
    throttle: 10000,
  },
});

export const sendContactForm = (formElement) =>
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement);
