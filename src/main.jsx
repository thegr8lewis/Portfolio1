import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Portfolioroutes from '/src/routes/Portfolioroutes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Portfolioroutes />
    </BrowserRouter>
  </React.StrictMode>
)