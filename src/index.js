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

WebFont.load({
  google: {
    families: ["Work Sans:400,500,700", "sans-serif"],
  },
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <BrowserRouter>
        <Contenedor>
          <Routes>
            <Route path="*" element={<App />} />
            <Route path="/" element={<App />} />
            <Route path="/iniciar-sesion" element={<InicioSesion />} />
            <Route path="/crear-cuenta" element={<RegistroUsuarios />} />
            <Route path="/categorias" element={<GastoCategoria />} />
            <Route path="/lista" element={<ListaGastos />} />
            <Route path="/editar/:id" element={<EditarGasto />} />
          </Routes>
        </Contenedor>
      </BrowserRouter>
      <Fondo />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
