import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ICU from 'i18next-icu';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-resources-to-backend';

i18n
  .use(ICU)
  .use(Backend((lng:string, ns:string) => import(`./${lng}/${ns}.json`)))
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['es', 'en', 'ja'],
    ns: ['common', 'proverbs'],
    defaultNS: 'common',
    debug: true, // TODO: cambiar en prod

    backend: {
      loadPath: '/src/i18n/{{lng}}/{{ns}}.json',
    },

    interpolation: {
      escapeValue: false, // React already escapes
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
