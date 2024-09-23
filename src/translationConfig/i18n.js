import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).use(Backend).init({

    fallbackLng: 'en',
    returnObjets : true,
    ns :['common','shared'],
    defaultNS: 'common',
    backend : {
        loadPath : '/locales/{{lng}}/{{ns}}.json',
    }

});

export default i18n