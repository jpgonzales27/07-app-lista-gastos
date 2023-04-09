import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { BtnRegresar } from "../elmentos/BtnRegresar";
import { Header, Titulo } from "../elmentos/Header";
import { AuthContext, useAuth } from "../contextos/AuthContext";

const ListaGastos = () => {
  /**
   * Para acceder al contexto debemos hacer uso del hook useContext
   */
  const contexto = useContext(AuthContext);
  console.log(contexto);

  /**
   * usando el hook persoanzalizado para acceder al contexto
   */
  const { usuario } = useAuth();
  console.log(usuario);

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
