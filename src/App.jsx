import { useContext } from 'react'
import Header from './components/header/index'
import Card  from './components/card/index'
import './App.css'
import { AppContext } from './context/provider'

function App() {
  const [search] = useContext(AppContext)
  let { data, error, loading } = search.weather

  return (
    <div className='px-0 py-0 bg-blue-900 h-screen w-screen font-semibold'>
      <Header />
      { loading && data &&
        <div className='px-2 py-4 m-auto flex flex-col flex-wrap gap-3 justify-center md:flex-row md:px-8'>
          <Card heigth='h-1/2' width='w-2/4'>
          </Card>
          <Card heigth='h-1/2' width='w-1/4'>
          </Card>
         </div>
      }
    </div>
)
}

export default App
