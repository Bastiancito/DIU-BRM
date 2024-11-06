import React from 'react';

const Step4 = ({ onBack, onNext }) => {
  return (
    <div>
      <h3>Datos Adicionales</h3>
      <label htmlFor='extraInfo'>Información Adicional</label>
      <textarea id='extraInfo' className='input' placeholder='Ingrese información adicional...' rows='4'></textarea>

      <button className='button-admision' onClick={onBack}>Retroceder</button>
      <button className='button-admision' onClick={onNext}>Siguiente</button>
    </div>
  );
};

export default Step4;
