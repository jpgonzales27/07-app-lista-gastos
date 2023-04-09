import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
/**
 * Creando el Contexto Global
 */
const AuthContext = React.createContext();

/**
 * Creamos el provider para envolver a los compoentes que
 * podran acceder al estado global
 */
const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState();

  /**
   * Creamos otro estado para sabe cuando termino de  cargar
   * y realizar la comprobacion del usuario con onAuthStateChanged
   */
  const [cargando, setCargando] = useState(true);

  /**
   * Efecto para ejecutar la comprobacion si el
   * usuario ya esta registrado uun sola vez
   */
  useEffect(() => {
    //Comprobamos si hay el usaurio
    const cancelarSuscripcion = onAuthStateChanged(auth, (usuario) => {
      setUsuario(usuario);
      setCargando(false);
    });
    return cancelarSuscripcion;
  }, []);

  return (
    <AuthContext.Provider value={{ usuario: usuario }}>
      {/* Solamente retornamos los elementos hijos cuando no este cargando.
	  De esta forma nos aseguramos de no cargar el resto de la app hasta que
      el usuario haya sido establecido.

      Si no hacemos esto al refrescar la pagina el componente children
      intenta cargar inmediatamente, antes de haber comprobado que existe un usuario. */}
      {!cargando && children}
    </AuthContext.Provider>
  );
};

/**
 * hook personalizado para acceder al contexto
 */
const useAuth = () => {
  return useContext(AuthContext);
};

/**
 * Debemos expeortar tanto el contexto como el provider
 */
export { AuthContext, AuthProvider, useAuth };
