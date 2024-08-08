import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getValues as es } from "./i18n/es";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { test: "oe" } },
    es: { translation: es() },
  },
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
