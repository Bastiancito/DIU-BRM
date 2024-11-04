import React from 'react';
import LogoBanner from '../components/logo_banner';
import Footer from '../components/footer';
import '../stylesheets/postulaciones.scss';

export const Postulaciones = () => {
  return (
    <>
      <div className='postulaciones-container'>
        <div className='left-container'>
          <div className='secuencia'>
            <div className='paso'>
              <p>Datos Admision</p>
            </div>
            <div className='paso'>
              <p>Datos Personales</p>
            </div>
            <div className='paso'>
              <p>Datos Academicos</p>
            </div>
            <div className='paso'>
              <p>Datos Adicionales</p>
            </div>
            <div className='paso'>
              <p>Seleccion Carrera/Programa</p>
            </div>
            <div className='paso'>
              <p>Documentos</p>
            </div>
          </div>

          <div className='header'>
            {/* Primer Grupo: Selecciona el Período */}
            <div>
              <label htmlFor='periodSelect'>Selecciona el período</label>
              <select id='periodSelect' className='select'>
                <option value="Primer Periodo 2025">Primer Periodo 2025</option>
              </select>
            </div>

            {/* Segundo Grupo: Selecciona tu Tipo de Postulación */}
            <div>
              <label htmlFor='admissionSelect'>Selecciona tu tipo de postulación</label>
              <select id='admissionSelect' className='select'>
                <option value="Admision especial">Admisión Especial</option>
              </select>
            </div>
            <button className='button'>Siguiente</button>
          </div>
        </div>

        {/* Contenedor para los nuevos divs a la derecha */}
        <div className='right-container'>
          <div className='right-div'>
            <p>Contenido del Div 1</p> {/* Contenido del primer div */}
          </div>
          <div className='right-div'>
            <p>Contenido del Div 2</p> {/* Contenido del segundo div */}
          </div>
        </div>
      </div>

      <Footer className='footer' />
    </>
  );
};

export default Postulaciones;
