import api from '../services'

class Store {
  constructor(api) {
    this.api = api,
    this.currency = null
  }

  async init() {
    const response = await Promise.all([
      this.api.currency(),
    ])

    const [currency] = response
    this.currency = currency

    return response
  }
}

const store = new Store(api)

export default store
