import React from 'react';

const Step2 = ({ onBack, onNext }) => {
  return (
    <div className='div__step'>
      <h3>Datos Personales</h3>
      <label htmlFor='name'>Nombre</label>
      <input type='text' id='name' className='input' />

      <label htmlFor='email'>Email</label>
      <input type='email' id='email' className='input' />

      <div className='div__buttons'>
      <button className='button-admision' onClick={onBack}>Retroceder</button>
      <button className='button-admision' onClick={onNext}>Siguiente</button>
      </div>
    </div>
  );
};

export default Step2;