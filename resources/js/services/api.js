import axios from 'axios'

const baseURL = process.env.NODE_ENV == 'production' ? 'https://dev.org.br/api' : 'http://homologacao.dev.org.br/api'

const api = axios.create({
  baseURL
})
export default api
