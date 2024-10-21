import { createI18n } from 'vue-i18n'

function loadLocaleMessages() {
  const locales = import.meta.glob('./lang/*.js', { eager: true })
  const messages = {}
  Object.keys(locales).forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales[key].default
    }
  })
  return messages
}
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem(import.meta.env.VITE_LANG) || 'en',
  messages: loadLocaleMessages(),
})

export default i18n
