import React from "react";
import { Helmet } from "react-helmet";
import { Boton } from "../elmentos/Boton";
import {
  ContenedorBoton,
  Formulario,
  Input,
} from "../elmentos/ElementosFormulario";
import { ContenedorHeader, Header, Titulo } from "../elmentos/Header";
import { ReactComponent as SvgLogin } from "./../imagenes/registro.svg";
import styled from "styled-components";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

const RegistroUsuarios = () => {
  return (
    <>
      <Helmet>
        <title>Crear Cuenta</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Crear Cuenta</Titulo>
          <div>
            <Boton to="/iniciar-sesion">Iniciar Sesion</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario>
        <Svg />
        <Input type="email" name="email" placeholder="Correo Electronico" />
        <Input type="password" name="password" placeholder="Contraseña" />
        <Input
          type="passowrd"
          name="password2"
          placeholder="Confirmar Contraseña"
        />
        <ContenedorBoton>
          <Boton as="Button" primario type="submit">
            Crear Cuenta
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
};

export default RegistroUsuarios;
