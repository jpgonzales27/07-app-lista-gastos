import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import Alerta from "../elmentos/Alerta";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

const InicioSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const [alerta, setAlerta] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstadoAlerta(false);
    setAlerta({});
    console.log(email, password);

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(email)) {
      console.log("Por favor ingresa un correo electronico valido");
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Por favor ingresa un correo electronico valido",
      });
      return;
    }

    if (email === "" || password === "") {
      console.log("Por favor llena todos los campos");
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Por favor llena todos los campos",
      });
      return;
    }

    console.log("logeamos un usuario");
    try {
      /**
       * el metodo signInWithEmailAndPassword(auth, email, password)
       * nos permite logearnos con el usuario que registramos en firestore
       */
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      let mensaje;
      setEstadoAlerta(true);
      switch (error.code) {
        case "auth/wrong-password":
          mensaje = "La contraseña es incorrecta.";
          break;
        case "auth/user-not-found":
          mensaje = "No se encontro ninguna cuenta con este email";
          break;
        default:
          mensaje = "Hubo un error al intentar iniciar sesion.";
          break;
      }

      console.log(mensaje);
      setAlerta({ tipo: "error", mensaje: mensaje });
    }
  };

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
        <ContenedorBoton>
          <Boton as="button" primario type="submit">
            Iniciar Sesion
          </Boton>
        </ContenedorBoton>
      </Formulario>
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        setEstadoAlerta={setEstadoAlerta}
      />
    </>
  );
};

export default InicioSesion;
