import React from "react";
import LogoBanner from "../components/logo_banner";
import Footer from "../components/footer";

export const Postulaciones = () => {
  return (
    <>
      <LogoBanner className="logo-banner" />
      <section className="postulaciones__section">
        <h1 className="postulaciones__h1">Postulaciones</h1>
        <a className="postulaciones__a" href="/iniciar-sesion">
          Nueva postulación
        </a>
      </section>
      <Footer className="footer" />
    </>
  );
};

export default Postulaciones;
