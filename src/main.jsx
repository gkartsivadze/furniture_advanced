import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.jsx'
import Home from './directions/home.jsx'

import './index.scss'
import './app.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
