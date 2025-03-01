import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      language: "Language",
      login: "Login/Signup",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      language: "Langue",
      login: "Connexion/Inscription",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
