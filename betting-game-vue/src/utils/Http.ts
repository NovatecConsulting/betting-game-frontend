import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' }
})
