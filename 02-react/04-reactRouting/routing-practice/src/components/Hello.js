import React, { useState } from 'react';

const Hello = (props) => {
    const { greeting, backgroundColor, textColor } = props;
    
    if(isNaN(greeting)) {
        return(
            <h1 style={{backgroundColor: props.backgroundColor, color: props.textColor}}>{ props.greeting }</h1>
        )
    } else {
        return(<h1 style={{ backgroundColor: 'red', color: 'white', fontSize:'larger' }}>{ props.greeting } is not a word!!!</h1>)
    }
}

export default Hello;