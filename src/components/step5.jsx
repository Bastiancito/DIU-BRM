import React from 'react';

const Step5 = ({ onBack, onNext }) => {
  return (
    <div>
      <h3>Selección Carrera/Programa</h3>
      <label htmlFor='careerSelect'>Seleccione su Carrera/Programa</label>
      <select id='careerSelect' className='select'>
        <option value="">Seleccione una carrera...</option>
        <option value="Ingeniería">Ingeniería Civil Informatica</option>
        
      </select>

      <button className='button' onClick={onBack}>Retroceder</button>
      <button className='button' onClick={onNext}>Siguiente</button>
    </div>
  );
};

export default Step5;
