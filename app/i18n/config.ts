export const defaultLocale = 'en';
export const locales = ['en', 'fr', 'nl'] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  nl: 'NL',
};
