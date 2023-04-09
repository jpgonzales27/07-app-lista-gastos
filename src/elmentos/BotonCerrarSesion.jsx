import React from "react";
import { ReactComponent as IconoCerrarSesion } from "./../imagenes/log-out.svg";
import { Boton } from "./Boton";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export const BotonCerrarSesion = () => {
  const navigate = useNavigate();

  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      navigate("/iniciar-sesion");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Boton iconogrande as="button" onClick={cerrarSesion}>
      <IconoCerrarSesion />
    </Boton>
  );
};
