import React from 'react';
import CardTemp from "./CardTemp";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import {RiEyeCloseFill} from "react-icons/ri";


export default function Card({max, min, img,name,onClose,primary}) {
  //const {max, min, img,name,onClose,primary}=props;
  // acá va tu código
  function handleOnClose(){//Con esto me aseguro que el valor que voy a recibir en el componente
    //onClose es una función, si no es una función no hace nada
    if(typeof onClose==="function") onClose();
  } 
   return (
    <div className={`${styles.card} ${primary ? styles.primary:""}`}> {/* Props, si existe props.primary, entonces aplica styles.primary y si no, no apliques nada*/}
   
    {/* Tenemos que pasar una función, no ejecutarla 
    Entre llaves porque estoy poniendo código js  */}
    <span className={styles.name} >
      {name}
     {!primary&&<button className={styles.button} onClick={handleOnClose}><RiEyeCloseFill/></button>}{/*   Si primary no existe el boton no se renderiza */}
    </span>

      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imagen del clima"/>
    
    <div className={styles.temps}>
     <CardTemp label="Min" value={min}/>
     <CardTemp label="Max" value={max}/>
    </div>
  </div>)
};

Card.prototypes={
max: PropTypes.number,
min: PropTypes.number,
name: PropTypes.string,
img: PropTypes.string,
onClose: PropTypes.func,
}