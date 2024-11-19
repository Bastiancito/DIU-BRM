import React from 'react';

const Step5 = ({ onBack, onNext }) => {
  return (
    <div className='div__step'>
      <h3>Selección Carrera/Programa</h3>
      <label htmlFor='careerSelect'>Seleccione su Carrera/Programa</label>
      <select id='careerSelect' className='select'>
        <option value="">Seleccione una carrera...</option>
        <option value="Ingeniería">Ingeniería Civil Informatica</option>
        
      </select>

      <div className='div__buttons'>
      <button className='button-admision' onClick={onBack}>Retroceder</button>
      <button className='button-admision' onClick={onNext}>Siguiente</button>
      </div>
    </div>
  );
};

export default Step5;
