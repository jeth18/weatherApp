import React from 'react'
import {render} from 'react-dom'
import './index.css'
import App from './App'
import Provider from './context/provider'

render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
