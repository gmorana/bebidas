import React, { useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";

const ListaRecetas = () => {
  const { recetas } = useContext(RecetasContext);
 // console.log(recetas);
  return (<div className="row mt-5">
      {recetas.map( receta => ())}
  </div> );
};

export default ListaRecetas;
