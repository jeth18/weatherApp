import axios from 'axios'
import { api, API_KEY} from '../api'

function getDataByCiudad(ciudad) {
  return axios.get(`${api}?q=${ciudad}&appid=${API_KEY}`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

export {
  getDataByCiudad
}