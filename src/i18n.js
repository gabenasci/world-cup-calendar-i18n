import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { format as formatDate, isDate } from "date-fns";
import { enUS, es, ptBR } from "date-fns/locale";

const locales = { enUS, es, ptBR }

const apiKey = "iJ0UpA2Tk30Rm8Gx29UnhA";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt-BR",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["pt-BR","es","en"],
    
    interpolation: {
      format: (value, format, lng) => {
        if (isDate(value)) {
            if (lng == "pt-BR")
              lng = 'ptBR'
            const locale = locales[lng];
            if (format === "short")
                return formatDate(value, "PP", { locale });
            if (format === "weekday")
                return formatDate(value, "cccc", { locale });
            if (format === "datetime")
                return formatDate(value, 'p', { locale })
            if (format === "relative")
                return formatRelative(value, new Date(), { locale });
            return formatDate(value, format, { locale });
        }
    
        return value;
      }  
    },
    backend: {
      loadPath: loadPath
    },

  })