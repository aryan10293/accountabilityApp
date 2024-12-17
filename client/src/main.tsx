import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import * as React from 'react'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
