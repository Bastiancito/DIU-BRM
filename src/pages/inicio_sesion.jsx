import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoBanner from "../components/logo_banner";
import Footer from "../components/footer";

export const InicioSesion = () => {
  const [inicioSesion, setInicioSesion] = useState(true);
  const [rut, setRut] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate();

  function iniciarSesion() {
    setInicioSesion(true);
  }

  const handleLoginClick = () => {
    console.log("Sesión iniciada");
    // Aquí puedes agregar la lógica adicional de inicio de sesión si es necesario

    // Navegar a la página de inicio (o la ruta deseada)
    navigate("/home"); // Reemplaza "/" con la ruta que desees
  };

  function registrarse() {
    setInicioSesion(false);
  }
  return (
    <>
      <LogoBanner className="logo-banner" />
      {/* <p>¡Inicio de sesión!</p> */}
      <button
        onClick={() => {
          iniciarSesion();
        }}
      >
        Iniciar Sesión
      </button>
      <button
        onClick={() => {
          registrarse();
        }}
      >
        Registrarse
      </button>
      {inicioSesion ? (
        <>
          <p>
            Para exalumnos ingresar con su RUT sin puntos ni guión y como
            contraseña su fecha de nacimiento en formato DDMMAA.
          </p>
          <p>
            Si no cuentas con RUT chileno puedes solicitar un RUT provisorio
            aquí.
          </p>
          <p>
            Si tienes problemas para acceder al sitio te recomendamos
            contactarte a soporte.admision@usm.cl indicando tu RUT.
          </p>
          <h2>Iniciar sesión con una cuenta local</h2>
          <p>Rut</p>
          <input
            type="text"
            placeholder="Escribe algo..."
            value={rut} // Asigna el estado como el valor del input
            onChange={(event) => setRut(event.target.value)} // Actualiza el estado cuando cambia el texto
            style={{ padding: "8px", fontSize: "16px", marginBottom: "10px" }}
          />
          <p>Contraseña</p>
          <input
            type="text"
            placeholder="Escribe algo..."
            value={contrasena}
            onChange={(event) => setContrasena(event.target.value)}
            style={{ padding: "8px", fontSize: "16px", marginBottom: "10px" }}
          />
          <br />
          <button
            onClick={() => {
              handleLoginClick()
            }}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => {
              console.log("Se le olvidó la contraseña");
            }}
          >
            ¿Ha olvidado la contraseña?
          </button>
        </>
      ) : (
        <>
          <h2>Registro:</h2>
          <p>
            * Si tu usuario ya se encuentra en uso y no has creado tu
            contraseña, puedes iniciar sesión con tu clave temporal que serían
            los 6 primeros dígitos de tu Rut.
          </p>
          <p>Correo electronico</p>
          <input
            type="text"
            placeholder="Escribe algo..."
            value={rut} // Asigna el estado como el valor del input
            onChange={(event) => setRut(event.target.value)} // Actualiza el estado cuando cambia el texto
            style={{ padding: "8px", fontSize: "16px", marginBottom: "10px" }}
          />
          <p>Rut</p>
          <input
            type="text"
            placeholder="Escribe algo..."
            value={rut} // Asigna el estado como el valor del input
            onChange={(event) => setRut(event.target.value)} // Actualiza el estado cuando cambia el texto
            style={{ padding: "8px", fontSize: "16px", marginBottom: "10px" }}
          />
          <p>Contraseña</p>
          <input
            type="text"
            placeholder="Escribe algo..."
            value={contrasena}
            onChange={(event) => setContrasena(event.target.value)}
            style={{ padding: "8px", fontSize: "16px", marginBottom: "10px" }}
          />
          <p>Confirmar contraseña</p>
          <input
            type="text"
            placeholder="Escribe algo..."
            value={contrasena}
            onChange={(event) => setContrasena(event.target.value)}
            style={{ padding: "8px", fontSize: "16px", marginBottom: "10px" }}
          />
          <br />
          <button
            onClick={() => {
              console.log("Sesión iniciada");
            }}
          >
            Registrarse
          </button>
        </>
      )}
      <Footer className="footer" />
    </>
  );
};

export default InicioSesion;
