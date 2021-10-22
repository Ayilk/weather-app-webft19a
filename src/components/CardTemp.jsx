import styles from "./CardTemp.module.css";
 


function CardTemp({label,value}){
    return(
        <div className={styles.temp}>
            <span>{label}</span>
            <span>{value}°</span>
        </div>
    );
}

export default CardTemp;