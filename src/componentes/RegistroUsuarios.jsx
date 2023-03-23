import React, { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password2":
        setPassword2(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, password2);

    //validar que el correo se un correo valido
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(email)) {
      console.log("Por favor ingresa un correo electronico valido");
      return;
    }

    //validar que los campos no esten vacios
    if (email === "" || password === "" || password2 === "") {
      console.log("Por favor llena todos los campos");
      return;
    }

    //validar que las contraseñas sean iguales
    if (password !== password2) {
      console.log("Los passwords deben ser iguales");
      return;
    }

    //Si todo esta bien registraremos un usuario
    console.log("registramos usuario");
  };

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

      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Correo Electronico"
          value={email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
        />
        <Input
          type="passowrd"
          name="password2"
          placeholder="Confirmar Contraseña"
          value={password2}
          onChange={handleChange}
        />
        <ContenedorBoton>
          <Boton as="button" primario type="submit">
            Crear Cuenta
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
};

export default RegistroUsuarios;
