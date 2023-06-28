import { createI18n } from 'vue-i18n';
import type { I18n } from 'vue-i18n';

interface Locales {
  [index: string]: Locales | string;
}

const messages: { [index: string]: Locales } = {};

export const i18n: I18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'de',
  warnHtmlMessage: false,
  messages,
});
