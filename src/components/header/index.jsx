import { useContext, useState } from 'react'
import { AppContext } from '../../context/provider'
import { LocationMarkerIcon, SearchIcon } from '@heroicons/react/outline'
import { SunIcon } from '@heroicons/react/solid'
import { getDataByCiudad } from '../../service/service'
import Input from '../input/index'

function Header() {
  const { search, setSearch, data, setData } = useContext(AppContext)
  const [vacio, setVacio] = useState(false)

  function handleChange(e) {
    setSearch({ ...search, ciudad: e.target.value })
  }

  async function handleSubmit() {
    setData({ ...data, response: {}, loading: false })
    setVacio(search.ciudad === '')
    if (!vacio) {
      const resultado = await getDataByCiudad(search.ciudad)
      if (resultado.status === 404) {
        setData({
          ...data,
          loading: false,
          response: resultado.data,
          error: true
        })
      } else if (resultado.status === 200) {
        setData({
          ...data,
          loading: true,
          response: resultado.data,
          temperatura: resultado.data.main.temp,
          error: false
        })
      }
    }
  }

  return (
    <header className="bg-blue-800 simple w-full grid grid-cols-1 md:grid-cols-3 grid-rows-1 px-3 py-2 m-0 rounded-bl-md rounded-br-md h-8 shadow-lg text-white">
      <SunIcon className="hidden md:none md:flex md:justify-start h-5 w-5 text-yellow-600" />
      <div className="flex flex-row w-auto justify-center">
        <Input
          type="text"
          placeholder="Ciudad Ej. Barcelona"
          icon={<LocationMarkerIcon />}
          handleChange={handleChange}
          inputVacio={vacio}
        />
        <button
          className="bg-indigo-300 opacity-3 rounded-tr-md rounded-br-md outline-none shadow-lg w-5 pl-1"
          onClick={() => handleSubmit()}
        >
          <SearchIcon className="h-3 w-3 text-blue-900" />
        </button>
      </div>
      <h5 className=" hidden md:none md:flex md:justify-end">WeatherApp</h5>
    </header>
  )
}

export default Header
