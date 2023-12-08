import "server-only";
type LOCALE = {
  en: any;
  nl: any;
};

type LOCALE_TYPE = keyof LOCALE;
const dictionaries: LOCALE = {
  en: () =>
    import("../app/[lang]/dictionaries/en.json").then(
      (module) => module.default
    ),
  nl: () =>
    import("../app/[lang]/dictionaries/nl.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale: LOCALE_TYPE) =>
  dictionaries?.[locale]();
