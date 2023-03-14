import React from "react";
import { Helmet } from "react-helmet";
import { BtnRegresar } from "../elmentos/BtnRegresar";
import { Header, Titulo } from "../elmentos/Header";

const ListaGastos = () => {
  return (
    <>
      <Helmet>
        <title>Lista de gastos</title>
      </Helmet>
      <Header>
        <BtnRegresar />
        <Titulo>Lista de gastos</Titulo>
      </Header>
    </>
  );
};

export default ListaGastos;
