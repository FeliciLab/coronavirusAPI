import axios from 'axios'

const baseURL = process.env.NODE_ENV == 'production' ? 'https://www.dev.org.br/api' : 'https://homolog.dev.org.br/api'

const api = axios.create({
  baseURL
})
export default api
