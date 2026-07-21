import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { ContextProvider } from './assets/components/Contextapi.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ContextProvider>
  
    <App />
      <ToastContainer
        position="top-right"
        autoClose={4000}
      />
    </ContextProvider>
  </BrowserRouter>,
)
