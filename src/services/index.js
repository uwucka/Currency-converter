import config from '../config'

class Api {
  constructor(options) {
    this.url = options.url
  }

  async currency() {
    const response = await fetch(this.url)
    const data = await response.json()

    return data
  }
}

const api = new Api(config)

export default api
