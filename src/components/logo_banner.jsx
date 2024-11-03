import React from "react";
import banner from "../assets/banner.jpg";
import logo from "../assets/logo.png";

const LogoBanner = () => {
  return (
    <>
      <img className='logo-banner__img' src={logo} alt="Logo" />
      <img className='logo-banner__img' src={banner} alt="Banner" />
    </>
  );
};

export default LogoBanner;
