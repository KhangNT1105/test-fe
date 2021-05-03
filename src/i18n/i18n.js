import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en/en.json';
import vn from './vn/vn.json';
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: en
            },
            vn: {
                translation: vn
            }
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;