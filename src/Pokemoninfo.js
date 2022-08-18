import { useState } from "react";
import styles from "./styles/Pokemoninfo.module.css"

function Pokemoninfo(props) {

    // console.log("Pokemon info ejecutado")
    const [datos, setDatos] = useState(props.informacion);
    const [Id, setId] = useState(props.id);
    console.log(props.informacion)
    return <div>
        <h1 className={styles.name_pokemon}>{datos.name}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Id}.png`} className={styles.img_pokemon}></img>
        <p className={styles.hp_pokemon}>{datos.base_experience} hp</p>
    </div>
}

export default Pokemoninfo;