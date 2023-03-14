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
            <Boton to="/categorias">Categorias</Boton>
            <Boton to="/lista">Lista Categoria</Boton>
            <Boton>X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  );
};

export default App;
