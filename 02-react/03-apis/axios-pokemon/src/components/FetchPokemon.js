import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchPokemon = (props) => {

    const [ pokedex, setPokedex ] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
        .then((res) => {
            console.log(res);
            console.log(res.data.results);
            setPokedex(res.data.results);
        })
        .catch((err)=>console.log(err))

    }, []);

    return (
        <div>
            <h1>Pokedex</h1>
            <ul>
                { pokedex.map((pokemon, i) => {
                    return (<li key ={ i }> { pokemon.name }</li>)
                })}
            </ul>
        </div>
    )


}

export default FetchPokemon;