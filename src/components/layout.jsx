import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import Inicio from '../pages/inicio'
import Postulaciones from '../pages/postulaciones'
import InicioSesion from '../pages/inicio_sesion'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        {/* <h1 className='layout__title'>Interfaz energética</h1> */}
        <NavBar />
        <div className='layout__page'>
          <Routes>  
            <Route path='/home' element={<HomePage />} />
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/postulaciones' element={<Postulaciones />} />
            <Route path='/iniciar-sesion' element={<InicioSesion />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
