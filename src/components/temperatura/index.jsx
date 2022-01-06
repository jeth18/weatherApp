import { useContext, useState } from 'react'
import { AppContext } from '../../context/provider'
const apiIcon = 'http://openweathermap.org/img/wn'
import Icon from '../icon/index'

export const Temperatura = () => {
  const { data, setData } = useContext(AppContext)
  const [disabled, setDisabled] = useState(false)
  const { temperatura, response } = data

  function CelToFah() {
    setDisabled(true)
    setData({
      ...data,
      temperatura: (temperatura * 9) / 5 + 32
    })
  }

  function FahToCel() {
    setDisabled(false)
    setData({
      ...data,
      temperatura: ((temperatura - 32) * 5) / 9
    })
  }

  return (
    <div className="flex flex-row md:flex-col gap-2 justify-between align-middle">
      <Icon
        icon={`${apiIcon}/${response.weather[0].icon}@2x.png`}
        description={response.weather[0].description}
        heigth="h-8"
        width="w-8"
      />
      <p className="py-2 flex justify-center text-3xl">
        {Math.trunc(temperatura)} °{disabled ? 'F' : 'C'}
      </p>
      <div className="flex justify-center py-4 md:py-1">
        <button
          onClick={() => FahToCel()}
          className={`bg-indigo-300 opacity-3 rounded-tl-md rounded-bl-md outline-none shadow-lg w-5 p-1 ${
            !disabled ? 'bg-indigo-400' : ''
          }`}
          disabled={!disabled}
        >
          °C
        </button>
        <button
          disabled={disabled}
          onClick={() => CelToFah()}
          className={`bg-indigo-300 opacity-3 rounded-tr-md rounded-br-md outline-none shadow-lg w-5 p-1 ${
            disabled ? 'bg-indigo-400' : ''
          }`}
        >
          °F
        </button>
      </div>
    </div>
  )
}
