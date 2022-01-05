import axios from 'axios'
import { api, API_KEY } from '../api'

function getDataByCiudad(ciudad) {
  return axios
    .get(`${api}?q=${ciudad}&lang=sp&appid=${API_KEY}&units=metric`)
    .then((response) => response.data)
    .catch((error) => error)
}

export { getDataByCiudad }
