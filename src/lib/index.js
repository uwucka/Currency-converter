class MoneyConverter {
  constructor(rates = {USD: 29.143568, EUR: 33.767891, RUB: 37.495354}, main = 'RUB') {
    this._rates = rates
    this._main = main
  }

  set rates(newRates) {
    return this._rates = newRates
  }

  set main(newMain) {
    return this._main = newMain
  }

  // Получение значения по ключу
  getRate(value, object = this._rates) {
    for (const key in object) {
      if (key === value) {
        return object[key]
      }
    }
  }

  // Рассчет суммы в валюте конвертации
  currencyConversion() {

  }

  // Текущий курс валюты относительно базовой (this._main)
  currencyRate() {

  }

  // Конвертация валют
  convert(value, from, to) {

  }
}

const mc = new MoneyConverter()

export default mc
