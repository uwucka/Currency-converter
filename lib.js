class MoneyConverter {
  constructor(rates = {USD: 29.143568, EUR: 33.767891, RUB: 37.495354}, base = 'EUR') {
    this._rates = rates
    this._base = base
  }

  // Set rates for currencies
  set rates(newRates) {
    return this._rates = newRates
  }

  // Set the currency for which the calculation will be made
  set base(newBase) {
    return this._base = newBase
  }

  // Getting a value from a key
  #getRate(value, object = this._rates) {
    for (const key in object) {
      if (key === value) {
        return object[key]
      }
    }
  }

  // Currency conversion
  convert(value, from, to) {
    if ( !this._rates[to] || !this._rates[from] ) throw new Error('No such currency was found in the rates')

    if (from === this._base) {
      return value * this.#getRate(to)
    }

    if (to === this._base) {
      return value / this.#getRate(from)
    }

    return (value / 1) * (this.#getRate(to) / this.#getRate(from))
  }
}

const mc = new MoneyConverter()

export default mc
