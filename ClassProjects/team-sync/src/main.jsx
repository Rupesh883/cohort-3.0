import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import {provider} from 'react-redux'
import { store } from './app/store.jsx'
import { Provider } from 'react-redux'
import AppRoutes from './app/routs/AppRoutes.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
)
