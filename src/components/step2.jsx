import React from 'react';

const Step2 = ({ onBack, onNext }) => {
  return (
    <div>
      <h3>Datos Personales</h3>
      <label htmlFor='name'>Nombre</label>
      <input type='text' id='name' className='input' />

      <label htmlFor='email'>Email</label>
      <input type='email' id='email' className='input' />

      <button className='button' onClick={onBack}>Retroceder</button>
      <button className='button' onClick={onNext}>Siguiente</button>
    </div>
  );
};

export default Step2;