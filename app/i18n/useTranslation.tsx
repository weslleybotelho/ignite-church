'use client';
import { createContext, useContext } from 'react';
import translations, { TranslationKeys } from './translations';
import { Locale, defaultLocale } from './config';

const LocaleContext = createContext<Locale>(defaultLocale);

export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

export function useTranslation(): TranslationKeys {
  const locale = useLocale();
  return translations[locale];
}
