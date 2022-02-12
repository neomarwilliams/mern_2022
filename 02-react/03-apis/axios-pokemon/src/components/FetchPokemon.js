import React, { useState } from 'react';

const FetchPokemon = (props) => {

    const displayPokeList = () =>{

        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
        }).catch(err=>{
            console.log(err);
        });
    }





    return (
        <div>
            <button onClick={ displayPokeList }>Fetch</button>
        </div>
    );
}

export default FetchPokemon;