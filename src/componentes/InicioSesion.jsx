import React from "react";
import { Helmet } from "react-helmet";
import { Boton } from "../elmentos/Boton";
import {
  ContenedorBoton,
  Formulario,
  Input,
} from "../elmentos/ElementosFormulario";
import { ContenedorHeader, Header, Titulo } from "../elmentos/Header";
import { ReactComponent as SvgLogin } from "./../imagenes/login.svg";
import styled from "styled-components";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

const InicioSesion = () => {
  return (
    <>
      <Helmet>
        <title>Inicio Sesion</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Inicio Sesion</Titulo>
          <div>
            <Boton to="/crear-cuenta">Registrarse</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario>
        <Svg />
        <Input type="email" name="email" placeholder="Correo Electronico" />
        <Input type="password" name="password" placeholder="Contraseña" />
        <ContenedorBoton>
          <Boton as="Button" primario type="submit">
            Iniciar Sesion
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
};

export default InicioSesion;
