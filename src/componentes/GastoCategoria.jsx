import React from "react";
import { Helmet } from "react-helmet";
import { BtnRegresar } from "../elmentos/BtnRegresar";
import { Header, Titulo } from "../elmentos/Header";

const GastoCategoria = () => {
  return (
    <>
      <Helmet>
        <title>Gastos Por Categoria</title>
      </Helmet>
      <Header>
        <BtnRegresar />
        <Titulo>Gastos Por Categoria</Titulo>
      </Header>
    </>
  );
};

export default GastoCategoria;
