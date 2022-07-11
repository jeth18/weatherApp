import axios from 'axios'
import { api, API_KEY } from '../api'

async function getDataByCiudad(ciudad) { 
  let response;
  try {
    response = await axios.get(`${api}?q=${ciudad}&lang=es&appid=${API_KEY}&units=metric`);
  } catch(error) {
    response = error.response;
  }
  return response;

  // return axios
  //   .get(`${api}?q=${ciudad}&lang=es&appid=${API_KEY}&units=metric`)
  //   .then((response) => response)
  //   .catch((error) => error.response)
}

export { getDataByCiudad }
