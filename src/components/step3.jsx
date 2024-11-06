import React from 'react';

const Step3 = ({ onBack, onNext }) => {
  return (
    <div>
      <h3>Datos Académicos</h3>
      <label htmlFor='degree'>Título o Grado</label>
      <input type='text' id='degree' className='input' placeholder='Ingrese su título o grado' />

      <label htmlFor='institution'>Institución</label>
      <input type='text' id='institution' className='input' placeholder='Ingrese el nombre de la institución' />

      <button className='button-admision' onClick={onBack}>Retroceder</button>
      <button className='button-admision' onClick={onNext}>Siguiente</button>
    </div>
  );
};

export default Step3;
