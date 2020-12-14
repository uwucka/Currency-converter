import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  // const number = document.querySelector('.number')

  //* Events
  initApp()

  //* Handlers
  async function initApp() {
    await store.init().then((res) => {
      console.log('init', res)
    })
  }
})

// вызвал метод http.get и получил актуальный курс. - класс запроса (хранит)
// ввел из какой в какую валюту. получил две переменные. - класс получения
// произвел конвертацию - класс конвертации
// вывеол наэкран - класс вывода
