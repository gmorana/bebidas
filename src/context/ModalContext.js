import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = props => {
  // state del provider
  const [idreceta, guardarIdReceta] = useState(null);
  const [info, guardarInfo] = useState({});
  // Una vez con receta llamar a API
  useEffect(() => {
    const obtenerReceta = async () => {
      if (!idreceta) return null;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
      const resultado = await axios.get(url);
      guardarInfo(resultado.data.drinks[0]);
    };
    obtenerReceta();
  }, [idreceta]);

  return (
    <ModalContext.Provider value={{ info, guardarIdReceta, guardarInfo }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
