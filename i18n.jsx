// i18n.js
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: require("./locales/en.json") },
    hi: { translation: require("./locales/hi.json") },
    mr: { translation: require("./locales/mr.json") },
    gu: { translation: require("./locales/gu.json") },
  },
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});
export default i18n;
