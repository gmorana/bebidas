import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const RecetasContext = createContext();
const RecetasProvider = props => {
  const [recetas, guardarRecetas] = useState([]);
  const [busqueda, buscarRecetas] = useState({
    nombre: "",
    categoria: ""
  });
  const [consultar, guardarConsultar] = useState(false);
  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${busqueda.categoria}&i=${busqueda.nombre}`;
        const recetas = await axios.get(url);
        //   console.log(recetas.data.drinks);
        guardarRecetas(recetas.data.drinks);
      };
      obtenerRecetas();
    }
  }, [busqueda, consultar]);
  return (
    <RecetasContext.Provider
      value={{ recetas, buscarRecetas, guardarConsultar }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};
export default RecetasProvider;
