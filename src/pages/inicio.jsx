import React from 'react';
import LogoBanner from '../components/logo_banner';
import Footer from '../components/footer';

export const Inicio = () => {
  return (
    <>
    <LogoBanner className='logo-banner'/>
      <p>¡Inicio!</p>
      <Footer className='footer'/>
    </>
  )
}

export default Inicio