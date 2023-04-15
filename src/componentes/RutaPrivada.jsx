import React from "react";
import { useAuth } from "../contextos/AuthContext";
import { Navigate } from "react-router-dom";

export const RutaPrivada = ({ children }) => {
  /**
   * accedemos a nuestro hook para verificar si el usuario
   * inicio sesion
   */
  const { usuario } = useAuth();

  /**
   * se encarga de verficar si el usuario inicio sesion si es asi podemos acceder a la ruta
   * caso contrario lo mandaremos a la pagina para que inicie su session
   */
  if (usuario) {
    return children;
  } else {
    return <Navigate replace to="/iniciar-sesion" />;
  }
};
