//1. react
import React from 'react'
import ReactDOM from 'react-dom/client'
//2. terceros
import { BrowserRouter } from 'react-router-dom'
//3. propio
import './styles.css'
import { HeroesApp } from './HeroesApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
);
