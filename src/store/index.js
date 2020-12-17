import api from '../services'

class Store {
  constructor(api) {
    this.api = api,
    this.date = null
    this.data = null
  }

  async init() {
    const response = await Promise.all([
      this.api.currency(),
    ])

    const [currency] = response
    this.date = this.getDate(currency)
    this.data = this.getFullData(currency)

    return response
  }

  getDate(currency) {
    return currency.Date
  }

  getFullData(currency) {
    return Object.entries(currency.Valute).map((el) => {
      return {
        name: el[1].Name,
        value: el[1].Value,
      }
    })
  }
}

const store = new Store(api)

export default store
