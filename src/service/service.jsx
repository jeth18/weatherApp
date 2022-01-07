import axios from 'axios'
import { api, API_KEY } from '../api'

function getDataByCiudad(ciudad) {
  return axios
    .get(`${api}?q=${ciudad}&lang=es&appid=${API_KEY}&units=metric`)
    .then((response) => response)
    .catch((error) => error.response)
}

export { getDataByCiudad }
