import React, { useState, useEffect } from 'react';

const DisplayPokemonByName = (props) => {

    const [ pokedex, setPokedex ] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(res => setPokedex(res.results))

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

export default DisplayPokemonByName;