import translations, { TranslationKeys } from './translations';
import { Locale, defaultLocale } from './config';

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale] || translations[defaultLocale];
}
