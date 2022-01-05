import React, { useMemo } from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import Provider from './context/provider'

const INITIAL_VALUE = {
  ciudad: ''
}

const INITIAL_RESPONSE = {
  response: {},
  temperatura: 0,
  loading: false,
  error: null
}

render(
  <React.StrictMode>
    <Provider value={(INITIAL_VALUE, INITIAL_RESPONSE)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
