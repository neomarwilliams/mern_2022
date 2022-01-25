import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, hairColor, initialAge } = props;
    const [age, setAge] = useState(initialAge);
    return (
        <div>
            <h1>{ lastName }, { firstName }</h1>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick= { (event) => setAge (age + 1)}> { firstName } had a birthday!</button>
        </div>
    )
}

export default PersonCard;