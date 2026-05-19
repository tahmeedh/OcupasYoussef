"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, translations, localeConfig, Translations } from "./translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "es",
  setLocale: () => {},
  t: translations.es,
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && saved in translations) setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    const config = localeConfig[l];
    document.documentElement.lang = l;
    document.documentElement.dir = config.dir;
  };

  useEffect(() => {
    const config = localeConfig[locale];
    document.documentElement.lang = locale;
    document.documentElement.dir = config.dir;
  }, [locale]);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t: translations[locale] as Translations,
        dir: localeConfig[locale].dir,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
