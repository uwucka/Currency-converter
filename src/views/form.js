class Form {
  constructor() {
    this.form = document.forms['currencyControls']

    this.date = document.querySelector('.date')
    this.inputFrom = document.querySelector('#input__from')
    this.inputTo = document.querySelector('#input__to')
    this.selectFrom = document.querySelector('#select__from')
    this.selectTo = document.querySelector('#select__to')
  }

  renderDate(date) {
    return this.date.insertAdjacentHTML('afterbegin', date)
  }

  renderSelectFrom(data) {
    if(!data.length) {
      return
    }
    
    let fragment = ''

    data.forEach((element) => {
      const template = Form.optionsTemplate(element.name, element.value)
      fragment += template
    })

    this.selectFrom.insertAdjacentHTML('afterbegin', fragment)
  }

  renderSelectTo(data) {
    if(!data.length) {
      return
    }
    
    let fragment = ''

    data.forEach((element) => {
      const template = Form.optionsTemplate(element.name, element.value)
      fragment += template
    })

    this.selectTo.insertAdjacentHTML('afterbegin', fragment)
  }

  static optionsTemplate(title, value) {
    return `
    <option value="${value}">${title}</option>
    `
  }
}

const form = new Form()

export default form
