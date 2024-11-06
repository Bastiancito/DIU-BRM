import React from 'react';

const Step1 = ({ onNext }) => {
  return (
    <div>
      <h3>Datos de Admisión</h3>
      <div>
        <label htmlFor='periodSelect'>Selecciona el período</label>
        <select id='periodSelect' className='select'>
          <option value="Primer Periodo 2025">Primer Periodo 2025</option>
        </select>
      </div>
      <div>
        <label htmlFor='admissionSelect'>Selecciona tu tipo de postulación</label>
        <select id='admissionSelect' className='select'>
          <option value="Admision especial">Admisión Especial</option>
        </select>
      </div>
      <button className='button-admision' onClick={onNext}>Siguiente</button>
    </div>
  );
};

export default Step1;
