import React, { useState } from 'react';
import Footer from '../components/footer';
import '../stylesheets/postulaciones.scss';
import Step1 from '../components/step1';
import Step2 from '../components/step2';
import Step3 from '../components/step3';
import Step4 from '../components/step4';
import Step5 from '../components/step5';
import Step6 from '../components/step6';
import { Link } from 'react-router-dom';

export const Postulaciones = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Datos Admision', 'Datos Personales', 'Datos Académicos', 'Datos Adicionales', 'Seleccion Carrera/Programa', 'Documentos'];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 onNext={handleNext} />;
      case 1:
        return <Step2 onBack={handleBack} onNext={handleNext} />;
      case 2:
        return <Step3 onBack={handleBack} onNext={handleNext} />;
      case 3:
        return <Step4 onBack={handleBack} onNext={handleNext} />;
      case 4:
        return <Step5 onBack={handleBack} onNext={handleNext} />;
      case 5:
        return <Step6 onBack={handleBack} />;

    }
  };

  return (
    <>
      <div className='postulaciones-container'>
        <div className='left-container'>
          <div className='secuencia'>
            {steps.map((step, index) => (
              <div key={index} className={`paso ${currentStep === index ? 'active' : ''}`}>
                <p>{step}</p>
              </div>
            ))}
          </div>

          <div className='header'>
            {renderStep()}
          </div>
        </div>

        <div className='right-container'>
          <div className='right-div'>
            <p>Ya postulaste?</p>
            <button className='text-button'>Ver estado de postulación</button>
          </div>
          <div className='right-div'>
            <p>Quieres saber más sobre las carreras que tenemos para ofrecer?</p>
            <Link to='/carreras'>
              <button className='text-button'>Ver carreras</button>
            </Link>
          </div>
          <div className='right-div'>
            <p>Verifica nuestras fechas importantes!</p>
            <button className='text-button'>Ver fechas</button>
          </div>
        </div>
      </div>

      <Footer className='footer' />
    </>
  );
};

export default Postulaciones;
