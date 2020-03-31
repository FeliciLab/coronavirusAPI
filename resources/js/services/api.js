import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.dev.org.br/api'
})
export default api
