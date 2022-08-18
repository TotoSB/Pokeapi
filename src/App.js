import './App.css';
import { useState, useEffect } from 'react';
import Pokemoninfo from './Pokemoninfo';

function App() {
  const [Loading, setLoading] = useState(false);
  const [datos, setDatos] = useState(null);
  const [idpokemon, SetIdPokemon] = useState(Math.floor(Math.random() * 905));
  const [valueTemp, setvalueTemp] = useState(null);
  useEffect(() => {
    setLoading(false)
    const request = async () => {
      const fetchpokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${idpokemon}`)
      const data = await fetchpokemon.json()
      setDatos(data)
      setLoading(true)
    }
    request()
    
  }, [idpokemon]);


  const handleSubmit = (e) => {
    e.preventDefault()
    if (valueTemp > 890 || valueTemp <= 0) {
      alert("Ingresa un valor menor a 890 y mayor a 0")
    }
    else {
      SetIdPokemon(valueTemp)
    }
  }

  const handleChange = (e) => {
    const valor = e.target.value
    setvalueTemp(valor)
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input placeholder={idpokemon} onChange={handleChange} type="number" className="i_number"/>
        <input type="submit" className="i_submit"/>
      </form>
      <h1 className="titulo">Pokedex</h1>
      <hr></hr>
      {Loading ?  <Pokemoninfo informacion={datos} id={idpokemon}></Pokemoninfo>  : <h2>Cargando</h2> }
    </div>
  );
}

export default App;
