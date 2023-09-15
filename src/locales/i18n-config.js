import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import homeEN from "@/locales/en/home.json";
import homeES from "@/locales/es/home.json";
import LanguageDetector from "i18next-browser-languagedetector";
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                home: homeEN,
            },
            es: {
                home: homeES,
            },
        },
        fallbackLng: "en",
    });
