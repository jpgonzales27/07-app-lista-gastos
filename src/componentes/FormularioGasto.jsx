import React, { useState } from "react";
import {
  Formulario,
  ContenedorFiltros,
  Input,
  InputGrande,
  ContenedorBoton,
} from "../elmentos/ElementosFormulario";
import { Boton } from "../elmentos/Boton";
import { ReactComponent as IconoPlus } from "./../imagenes/plus.svg";
import { SelectCategorias } from "./SelectCategorias";
import { DatePicker } from "./DatePicker";

export const FormularioGasto = () => {
  const [inputDescripcion, setInputDescripcion] = useState("");
  const [inputCantidad, setInputCantidad] = useState("");
  const [categoria, setCategoria] = useState("hogar");
  const [fecha, setFecha] = useState(new Date());

  const handleChange = (e) => {
    if (e.target.name === "descripcion") {
      setInputDescripcion(e.target.value);
    } else if (e.target.name === "cantidad") {
      /**
       * Usando la expresion regular solo estamos aceptando que
       * se ingrese los numerors del 0 al 9 si escribes letras lo coloca como vacio
       */
      setInputCantidad(e.target.value.replace(/[^0-9.]/g, ""));
    }
  };

  return (
    <Formulario>
      <ContenedorFiltros>
        <SelectCategorias categoria={categoria} setCategoria={setCategoria} />
        {/* <p>Date Picker</p> */}
        <DatePicker fecha={fecha} setFecha={setFecha} />
      </ContenedorFiltros>
      <div>
        <Input
          type="text"
          name="descripcion"
          id="descripcion"
          placeholder="Descripcion"
          value={inputDescripcion}
          onChange={handleChange}
        />
        <InputGrande
          type="text"
          name="cantidad"
          id="cantidad"
          placeholder="$0.00"
          value={inputCantidad}
          onChange={handleChange}
        />
      </div>
      <ContenedorBoton>
        <Boton as="button" primario conIcono type="submit">
          Agregar Gasto <IconoPlus />
        </Boton>
      </ContenedorBoton>
    </Formulario>
  );
};
