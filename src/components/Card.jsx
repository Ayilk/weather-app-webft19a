import React from 'react';
import CardTemp from "./CardTemp";

export default function Card({max, min, img,name,onClose}) {
  // acá va tu código
  function handleOnClose(){//Con esto me aseguro que el valor que voy a recibir en el componente
    //onClose es una función, si no es una función no hace nada
    if(typeof onClose==="function") onClose();
  }
  return (<div>
    <button onClick={handleOnClose}>X</button>
    {/* Tenemos que pasar una función, no ejecutarla 
    Entre llaves porque estoy poniendo código js  */}
    <span>{name}</span>
    <div>
      {/* <label>Min</label>
      <span>{min}</span>
      {/* El valor me viene por propiedad*
    </div>
    <div>
      <label>Max</label>
      <span>{max}</span> */}
     <CardTemp label="Min" value="{min}"/>
     <CardTemp label="Max" value="{max}"/>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imagen del clima"/>
  </div>)
};