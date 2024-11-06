import React from "react";
import LogoBanner from "../components/logo_banner";
import Footer from "../components/footer";
import inicio from "../assets/inicio.jpg";

export const Inicio = () => {
  return (
    <>
      <LogoBanner className="logo-banner" />
      <section className="inicio__section">
        <div className="section__div">
          <h1 className="div__h1">POSTULACIONES ABIERTAS ADMISIÓN 2025</h1>
          <a href="/iniciar-sesion" className="div__a">
            <img src={inicio} alt="" />
            <p>Postula aquí</p>
          </a>
        </div>
        <div className="section__div">
          <h2 className="div__h2">Conoce nuestra oferta</h2>
          <ul className="div__ul div__ul--horizontal">
            <li className="ul__li"><a className="li__a" href="/iniciar-sesion">Carreras Pregrado Diurno</a></li>
            <li className="ul__li"><a className="li__a" href="/iniciar-sesion">Carreras Pregrado Vespertin</a>o</li>
            <li className="ul__li"><a className="li__a" href="/iniciar-sesion">Magísteres</a></li>
            <li className="ul__li"><a className="li__a" href="/iniciar-sesion">Doctorados</a></li>
            <li className="ul__li"><a className="li__a" href="/iniciar-sesion">Educación Continua</a></li>
          </ul>
        </div>
      </section>
      <section className="inicio__section">
        <h2>Informaciones</h2>
        <ul className="section__ul section__ul--horizontal">
          <li className="ul__li"><a className="li__a" href="/iniciar-sesion">Noticias</a></li>
          <li className="ul__li"><a className="li__a" href="/iniciar-sesion">Matricúlate</a></li>
          <li className="ul__li"><a className="li__a" href="/iniciar-sesion">Admisión</a></li>
          <li className="ul__li"><a className="li__a" href="/iniciar-sesion">Universidad</a></li>
          <li className="ul__li"><a className="li__a" href="/iniciar-sesion">Beneficios</a></li>
          <li className="ul__li"><a className="li__a" href="/iniciar-sesion">Aranceles</a></li>
          <li className="ul__li"><a className="li__a" href="/iniciar-sesion">Aranceles</a></li>
          <li className="ul__li"><a className="li__a" href="/iniciar-sesion">Simulador Paes</a></li>
        </ul>
      </section>
      <section className="inicio__section">
        <h2>Descubre tu Futuro USM</h2>
        <p>
          Inscríbete <a href="">aquí</a> para recibir más información, novedades y actividades
          de Admisión USM
        </p>
      </section>
      <section className="inicio__section">
        <h2>Redes Sociales</h2>
        <ul className="section__ul section__ul--horizontal">
          <li className="ul__li"><a className="li__a" href="https://web.facebook.com/AdmisionUSM/">@admisionusm Ir a Facebook</a></li>
          <li className="ul__li"><a className="li__a" href="https://www.instagram.com/admisionusm/">@admisionusm Ir a Instagram</a></li>
          <li className="ul__li"><a className="li__a" href="https://www.youtube.com/user/USMAdmision">@usmadmision Ir a Youtube</a></li>
          <li className="ul__li"><a className="li__a" href="https://www.tiktok.com/@admisionusm">@usmadmision Ir a TikTok</a></li>
        </ul>
      </section>
      <section className="inicio__section">
        <h2>Tour Virtual 360°</h2>
        <p>Ver recorridos virtuales</p>
      </section>
      <Footer className="footer" />
    </>
  );
};

export default Inicio;
