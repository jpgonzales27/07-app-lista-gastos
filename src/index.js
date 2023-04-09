import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";
import { Contenedor } from "./elmentos/Contenedor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioSesion from "./componentes/InicioSesion";
import EditarGasto from "./componentes/EditarGasto";
import GastoCategoria from "./componentes/GastoCategoria";
import ListaGastos from "./componentes/ListaGastos";
import RegistroUsuarios from "./componentes/RegistroUsuarios";
import { Helmet } from "react-helmet";
import favicon from "./imagenes/logo.png";
import Fondo from "./elmentos/Fondo";
import { AuthProvider } from "./contextos/AuthContext";
import { RutaPrivada } from "./componentes/RutaPrivada";

WebFont.load({
  google: {
    families: ["Work Sans:400,500,700", "sans-serif"],
  },
});

const Index = () => {
  return (
    <>
      {/**
       * Helmet nos ayuda a colocar nuestros favicons y asignar un nombre a nuestro
       * titulo de cada pagina para mostrarlo
       */}
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      {/**
       * Envolvemos nuestros compoentes Con nuestro provider
       * para que todos los componentes dentro de el puedan
       * acceder el valor global que definimos en el value
       */}
      <AuthProvider>
        {/**
         * Definimos las rutas de nuestra aplicacion
         */}
        <BrowserRouter>
          <Contenedor>
            <Routes>
              <Route path="/iniciar-sesion" element={<InicioSesion />} />
              <Route path="/crear-cuenta" element={<RegistroUsuarios />} />
              {/**
               * Cremoas un componente RutaPrivada que se encarga de verficar si el usuario
               * inicio si es asi podemos acceder a la ruta
               */}
              <Route
                path="/categorias"
                element={
                  <RutaPrivada>
                    <GastoCategoria />
                  </RutaPrivada>
                }
              />

              <Route
                path="/lista"
                element={
                  <RutaPrivada>
                    <ListaGastos />
                  </RutaPrivada>
                }
              />
              <Route
                path="/editar/:id"
                element={
                  <RutaPrivada>
                    <EditarGasto />
                  </RutaPrivada>
                }
              />

              <Route
                path="/"
                element={
                  <RutaPrivada>
                    <App />
                  </RutaPrivada>
                }
              />

              <Route
                path="*"
                element={
                  <RutaPrivada>
                    <App />
                  </RutaPrivada>
                }
              />
            </Routes>
          </Contenedor>
        </BrowserRouter>
      </AuthProvider>
      <Fondo />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
