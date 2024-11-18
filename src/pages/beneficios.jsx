import React from 'react';
import '../stylesheets/beneficios.scss';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const BeneficiosMinisteriales = () => {
  return (
    <div className="beneficios-ministeriales">
      <h1>Beneficios Ministeriales</h1>
      <Link to="/home" className="back-button">‹ volver</Link>
      <p>Revisa los beneficios a los que puedes optar:</p>
      <div className="upload-section">
        <label htmlFor="file-upload" className="custom-file-upload">
          Seleccionar archivo
        </label>
        <input id="file-upload" type="file" />
        <button>Adjunta tu ficha de hogar</button>
      </div>

      <section className="section">
        <h2>Becas Complementarias</h2>
        <p>
          Los estudiantes que acceden a los beneficios de arancel del Ministerio de Educación (Mineduc) o de la Comisión Ingresa,
          y se encuentren dentro de los primeros 6 deciles de ingreso per cápita, pueden acceder a la beca de alimentación de educación
          superior de la Junta Nacional de Auxilio Escolar y Becas (Junaeb), conocida también como BAES. Para más información revisa el
          siguiente enlace: <a href="https://www.junaeb.cl/beca-baes">https://www.junaeb.cl/beca-baes</a>.
        </p>
        <p>
          Adicionalmente, existen beneficios de mantención que otorga la Junaeb a estudiantes de educación superior, cuyos detalles
          y requisitos puedes revisar aquí: <a href="https://www.junaeb.cl/becas-educacion-superior">https://www.junaeb.cl/becas-educacion-superior</a>.
        </p>
        <h3>Sitios de interés sobre los beneficios mencionados:</h3>
        <ul>
          <li>
            Postulación a beneficios del Estado como gratuidad, becas y créditos: <a href="http://www.fuas.cl">www.fuas.cl</a>
          </li>
          <li>
            Información de beneficios Mineduc (gratuidad, becas y FSCU): <a href="https://portal.beneficiosestudiantiles.cl">https://portal.beneficiosestudiantiles.cl</a>
          </li>
          <li>
            Requisitos institucionales para acceder al CAE en la USM: <a href="https://www.rree.usm.cl/beneficios/credito-con-garantia-estatal">https://www.rree.usm.cl/beneficios/credito-con-garantia-estatal</a>
          </li>
          <li>
            Beneficios JUNAEB: <a href="www.junaeb.cl">www.junaeb.cl</a>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Becas y créditos del Ministerio de Educación</h2>
        <p>
          Los estudiantes de la Universidad Técnica Federico Santa María, institución Acreditada por 6 años, pueden optar a las diferentes
          alternativas de financiamiento que otorga el Ministerio de Educación (Mineduc), las que se detallan a continuación:
        </p>
        <h3>Gratuidad</h3>
        <p>
          Este beneficio es dirigido a las familias correspondientes al 60% de menores ingresos de la población, cuyos miembros estudian en instituciones adscritas a este beneficio como la Universidad Técnica Federico Santa María. El beneficio implica que los estudiantes que se adjudican la Gratuidad no deberán pagar el arancel ni la matrícula durante la duración formal de la carrera. Para más información sobre el proceso de postulación visita <a href="https://www.gratuidad.cl">www.gratuidad.cl</a>.
        </p>
        <h3>Becas Ministeriales</h3>
        <p>
          Una beca es un apoyo económico que entrega el Ministerio de Educación para que puedas financiar parte del costo de tus estudios, cubriendo el total o parte del arancel anual de tu carrera y, en algunos casos, la matrícula.
        </p>
      </section>
      <Footer className='footer' />
    </div>
  );
};

export default BeneficiosMinisteriales;
