import config from '../config/config'

class Api {
  constructor(options) {
    this.url = options.url
  }

  async currency() {
    const response = await fetch(this.url)
        .then((res) => res.json())
        .then((data) => JSON.parse(data))
        .catch((err) => Promise.reject(err))

    return response
  }
}

const api = new Api(config)

export default api
