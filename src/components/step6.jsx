import React from 'react';

const Step6 = ({ onBack }) => {
  return (
    <div>
      <h3>Documentos</h3>
      <p>Asegúrate de tener listos los siguientes documentos:</p>
      <ul>
        <li>Identificación</li>
        <li>Certificados Académicos</li>
        <li>Comprobante de Postulación</li>

      </ul>
      
      <button className='button-admision' onClick={onBack}>Retroceder</button>
      <button className='button-admision' onClick={() => alert('¡Postulación completada!')}>Finalizar</button>
    </div>
  );
};

export default Step6;
