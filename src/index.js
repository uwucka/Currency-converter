import store from './store'
import form from './views/form'

document.addEventListener('DOMContentLoaded', () => {
  //* Events
  initApp()

  //* Handlers
  async function initApp() {
    await store.init()

    form.renderDate(store.date)
    form.renderSelectFrom(store.data)
    form.renderSelectTo(store.data)
  }
})
