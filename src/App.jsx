import { useContext } from 'react'
import Header from './components/header/index'
import Card  from './components/card/index'
import './App.css'
import { AppContext } from './context/provider'
import { TemplateIcon } from '@heroicons/react/outline'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import { Temperatura } from './components/temperatura'

function App() {

  const {data} = useContext(AppContext)
  const {loading, response} = data

  return (
    <div className='px-0 py-0 bg-blue-900 h-screen w-screen font-semibold'>
      <Header />
      { !loading ?
        <div className='h-full flex justify-center items-center'>
          <TemplateIcon className='h-8 w-8 text-white'/>
        </div>
        :
        <div className='px-2 py-4 m-auto flex flex-col flex-wrap gap-3 justify-center md:flex-row md:px-8 text-white'>
          <Card heigth='md:h-auto' width='md:w-2/4' direction='flex-col'>
            <div className='px-2'>
              <h1>{response.name},{response.sys.country}</h1>
            </div>
            <div className='flex flex-row'>
              <div className='px-1 flex flex-row'>
                <div className='py-1'>
                  <SunIcon className='md:none md:flex md:justify-start h-5 w-5 text-yellow-600'/>
                </div>              
                <p className='py-2'>{new Date(response.sys.sunrise * 1000).toLocaleTimeString()}</p>
              </div>
              <div className='px-1 flex flex-row'>
                <div className='py-1'>
                  <MoonIcon className='md:none md:flex md:justify-start h-5 w-5 text-slate-700'/>
                </div>              
                <p className='py-2'>{new Date(response.sys.sunset * 1000).toLocaleTimeString()}</p>
              </div>
            </div>
          </Card>
          <Card heigth='md:h-auto' width='md:w-auto' direction='flex-col' justify='justify-center aling-center'>
            <Temperatura />
          </Card>
        </div>
      }
    </div>
  )
}

export default App
