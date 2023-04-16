import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "./../theme";
import { ReactComponent as IconoDown } from "./../imagenes/down.svg";
import { IconoCategoria } from "../elmentos/IconoCateogria";

export const SelectCategorias = ({ categoria, setCategoria }) => {
  const [mostrarSelect, setMostrarSelect] = useState(false);

  const categorias = [
    { id: 1, nombre: "comida", texto: "Comida" },
    { id: 2, nombre: "cuentas y pagos", texto: "Cuentas y pagos" },
    { id: 3, nombre: "hogar", texto: "Hogar" },
    { id: 4, nombre: "transporte", texto: "Transporte" },
    { id: 5, nombre: "ropa", texto: "Ropa" },
    { id: 6, nombre: "salud e higiene", texto: "Salud e Higiene" },
    { id: 7, nombre: "compras", texto: "Compras" },
    { id: 8, nombre: "diversion", texto: "Diversion" },
  ];

  const handleClick = (e) => {
    /**
     * normalmente utilizariamos e.target para acceder al elemento
     * pero como nuestra opcion donde estamos haciendo click
     * esta dentro de otro elelemento debemos acceder a e.currentTarget
     *
     * y para ingresar al valor que cremos en data-valor
     * utlizamos dataset.valor
     */
    console.log(e.currentTarget);
    console.log(e.currentTarget.dataset.valor);
    setCategoria(e.currentTarget.dataset.valor);
  };

  return (
    <ContenedorSelect onClick={() => setMostrarSelect(!mostrarSelect)}>
      <OpcionSeleccionada>
        {categoria}
        <IconoDown />{" "}
      </OpcionSeleccionada>
      {mostrarSelect && (
        <Opciones>
          {categorias.map((categoria) => {
            return (
              <Opcion
                key={categoria.id}
                data-valor={categoria.nombre}
                onClick={handleClick}
              >
                <IconoCategoria nombre={categoria.nombre} />
                {categoria.texto}
              </Opcion>
            );
          })}
        </Opciones>
      )}
    </ContenedorSelect>
  );
};

const ContenedorSelect = styled.div`
  background: ${theme.grisClaro};
  cursor: pointer;
  border-radius: 0.625rem; /* 10px */
  position: relative;
  height: 5rem; /* 80px */
  width: 40%;
  padding: 0px 1.25rem; /* 20px */
  font-size: 1.5rem; /* 24px */
  text-align: center;
  display: flex;
  align-items: center;
  transition: 0.5s ease all;
  &:hover {
    background: ${theme.grisClaro2};
  }
`;

const OpcionSeleccionada = styled.div`
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 1.25rem; /* 20px */
    height: auto;
    margin-left: 1.25rem; /* 20px */
  }
`;

const Opciones = styled.div`
  background: ${theme.grisClaro};
  position: absolute;
  top: 5.62rem; /* 90px */
  left: 0;
  width: 100%;
  border-radius: 0.625rem; /* 10px */
  max-height: 18.75rem; /* 300px */
  overflow-y: auto;
`;

const Opcion = styled.div`
  padding: 1.25rem; /* 20px */
  display: flex;
  svg {
    width: 28px;
    height: auto;
    margin-right: 1.25rem; /* 20px */
  }
  &:hover {
    background: ${theme.grisClaro2};
  }
`;
