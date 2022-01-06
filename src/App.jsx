import React, { useContext } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import { TemplateIcon } from '@heroicons/react/outline'
import Header from './components/header/index'
import Card from './components/card/index'
import { AppContext } from './context/provider'
import { Temperatura } from './components/temperatura'
import humidity from './assets/tornado.svg'
import cloud from './assets/nubes.svg'
import wind from './assets/viento.svg'
import arrow from './assets/Arrow.svg'
import arrowTop from './assets/flecha-hacia-arriba.svg'
import arrowButton from './assets/flecha-hacia-abajo.svg'
import { Mapa } from './components/Mapa'

import './App.css'

function App() {
  const { data } = useContext(AppContext)
  const { loading, response } = data

  return (
    <div className="px-0 py-0 bg-blue-900 h-screen w-screen font-semibold">
      <Header />
      {!loading ? (
        <div className="m-1/2 flex justify-center items-center h-2/3">
          <TemplateIcon className="h-8 w-8 text-white" />
        </div>
      ) : (
        <div className="px-2 py-4 m-auto flex flex-col flex-wrap gap-3 justify-center md:flex-row md:px-8 text-white">
          <Card heigth="md:h-auto" width="md:w-auto" direction="flex-col">
            <p>
              {response.name},{response.sys.country}, ultima actualización:{' '} 
              {new Date(response.dt * 1000).toLocaleString()}
            </p>
            <div className="flex flex-row py-2">
              <div className="px-1 flex flex-row">
                <div className="py-1">
                  <SunIcon className="md:none md:flex md:justify-start h-5 w-5 text-yellow-600" />
                </div>
                <p className="py-2">
                  {new Date(response.sys.sunrise * 1000).toLocaleTimeString()}
                </p>
              </div>
              <div className="px-1 flex flex-row">
                <div className="py-1">
                  <MoonIcon className="md:none md:flex md:justify-start h-5 w-5 text-slate-700" />
                </div>
                <p className="py-2">
                  {new Date(response.sys.sunset * 1000).toLocaleTimeString()}
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center my-2 mx-1 py-2">
              <div className="flex flex-col justify-center items-center py-1 px-2">
                <img src={humidity} alt="humidity" className='h-5 w-5 invert'/>
                <p className='py-1'>Humedad</p>
                <p>{response.main.humidity} %</p>
              </div>
              <div className="flex flex-col justify-center items-center py-1 px-2">
                <img src={cloud} alt="cloud" className='h-5 w-5 invert'/>
                <p className='py-1'>Nubes</p>
                <p>{response.clouds.all} %</p>
              </div>
              <div className="flex flex-col justify-center items-center py-1 px-2">
                <img src={wind} alt="wind" className='h-5 w-5 invert'/>
                <p className='py-1'>Viento</p>
                <img src={arrow} alt="direction" className={`h-2 w-2 invert`} style={{transform: `rotate(${response.wind.deg}deg)`}}/>
                <p>{response.wind.speed} m/s</p>
              </div>
              <div className="flex flex-col justify-center items-center py-1 px-2">
                <div className='flex flex-row pb-4'>
                  <img src={arrowTop} alt="max" className="h-4 w-4 invert"/>
                  <p>{response.main.temp_max} °C</p>
                </div>
                <div className='flex flex-row pt-4'>
                  <img src={arrowButton} alt="min" className="h-4 w-4 invert"/>
                  <p>{response.main.temp_min} °C</p>
                </div>
              </div>
            </div>
          </Card>
          <Card
            heigth="md:h-auto"
            width="md:w-auto"
            direction="flex-col"
            justify="justify-center aling-center"
          >
            <Temperatura />
          </Card>
          <Card
            heigth="md:h-1/2"
            width="md:w-full"
          >
            <Mapa position={[response.coord.lat, response.coord.lon]}/>
          </Card>
        </div>
      )}
    </div>
  )
}

export default App
