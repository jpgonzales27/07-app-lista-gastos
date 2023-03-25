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
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Alerta from "../elmentos/Alerta";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

const RegistroUsuarios = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  /**
   * esta para manerar si la alerta sera visible o no
   */
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  /**
   * estado para crear un objeto y setear el tipo de alerta y el mensaje
   */
  const [alerta, setAlerta] = useState({});
  /**
   * para navegar en nuestra app hacemos uso de react-router-dom con su
   * hook useNavigate al que asignaremos al variable navigate para que
   * recibar las rutas a las que nos queremos mover
   */
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    /**
     * iniciamos los valores de la alerta al momento de enviar el formulario
     */
    setEstadoAlerta(false);
    setAlerta({});
    console.log(email, password, password2);

    //validar que el correo se un correo valido
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(email)) {
      console.log("Por favor ingresa un correo electronico valido");
      /**
       * si existe un error seteamos el estado de la alerta a true para que se muesttre
       * y definimos los valores del tipo de alerta y mensaje de error
       */
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Por favor ingresa un correo electronico valido",
      });
      return;
    }

    //validar que los campos no esten vacios
    if (email === "" || password === "" || password2 === "") {
      console.log("Por favor llena todos los campos");
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Por favor llena todos los campos",
      });
      return;
    }

    //validar que las contraseñas sean iguales
    if (password !== password2) {
      console.log("Los passwords deben ser iguales");
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Los passwords deben ser iguales",
      });
      return;
    }

    //Si todo esta bien registraremos un usuario
    console.log("registramos usuario");
    /**
     * Estamos usando el servicio de autenticacion de firebase V9
     * con el metodo createUserWithEmailAndPassword(auth,email,password) el cual
     * recibe 3 parametros (correo,contraseña) para regitrar nuevo usuario en firebase
     */
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      /**
       * navigate es el nombre que le asiganos cuando asiganamos en el useNaviage
       * recibe un string con el nombre la ruta que definimos en el Route en index.js
       * y navigate nos movere a esa ruta cuando se ejecute
       */
      navigate("/");
    } catch (error) {
      /**
       * obtenemos los nombres de los mensajes de error de firebase
       */
      console.log(error.code);
      let mensaje;
      /**
       * este switch evalua el mensaje de error que ocurrio y nos devolver un
       * mensaje personalizado para poder mostrar al usaurio
       */
      setEstadoAlerta(true);
      switch (error.code) {
        case "auth/weak-password":
          mensaje = "La contraseña tiene que ser de al menos 6 caracteres.";

          break;
        case "auth/email-already-in-use":
          mensaje =
            "Ya existe una cuenta con el correo electrónico proporcionado.";
          break;
        case "auth/invalid-email":
          mensaje = "El correo electrónico no es válido.";
          break;
        default:
          mensaje = "Hubo un error al intentar crear la cuenta.";
          break;
      }

      console.log(mensaje);
      setAlerta({ tipo: "error", mensaje: mensaje });
    }
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
          type="password"
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
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        setEstadoAlerta={setEstadoAlerta}
      />
    </>
  );
};

export default RegistroUsuarios;
