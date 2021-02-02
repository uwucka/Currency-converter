import store from './store'
import form from './views/form'
import mc from './lib'

document.addEventListener('DOMContentLoaded', () => {
  //* Events
  initApp()

  //* Handlers
  async function initApp() {
    await store.init()

    mc.rates = {
      AUD: 1.58, // 1.40 EUR === 1.58 AUD
      RUB: 92.131,
      USD: 1.21,
      EUR: 1.40,
    }

    mc.base = 'RUB'

    console.log('mc', mc.convert(1000, 'AUD', 'RUB'))

    form.renderDate(store.date)
    form.renderSelectFrom(store.data)
    form.renderSelectTo(store.data)
  }
})
