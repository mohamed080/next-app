import en from "../locales/en.json";
import ar from "../locales/ar.json";

const locales = { en, ar };

export const getTranslation = (lang, key) => {
  return locales[lang][key] || key;
};
