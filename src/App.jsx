import React from "react";
import { Helmet } from "react-helmet";
import { Boton } from "./elmentos/Boton";
import {
  ContenedorBotones,
  ContenedorHeader,
  Header,
  Titulo,
} from "./elmentos/Header";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>
          <ContenedorBotones>
            {/**
             * EL componente "Boton" es un style component de un link de react-router-dom
             * por eso podemos definar la propiedad to para movernos entre las distintas rutas
             */}
            <Boton to="/categorias">Categorias</Boton>
            <Boton to="/lista">Lista Categoria</Boton>
            <Boton to="/">X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  );
};

export default App;
