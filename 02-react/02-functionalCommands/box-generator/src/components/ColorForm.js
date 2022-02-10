import React, { useState } from 'react';

const ColorForm = (props) => {
    const [ boxColor, setBoxColor ] = useState("");
    const [ boxHeight, setBoxHeight ] = useState(""); 
    const [ boxWidth, setBoxWidth ] = useState("");
    const { boxList, setBoxList } = props;


    
    const createBox = (e) => {
        e.preventDefault(); 
        const newBox = { boxColor, boxHeight, boxWidth };
        console.log("Box description", newBox);   
        setBoxList([...boxList, newBox]);
        setBoxColor("");
        setBoxHeight("");
        setBoxWidth("");

        boxList.push(newBox);
        console.log(boxList);
    }

    const handleColor = (e) => {
        setBoxColor(e.target.value);
    }
    const handleHeight = (e) => {
        setBoxHeight(e.target.value);
    }
    const handleWidth = (e) => {
        setBoxWidth(e.target.value)
    }

    return (
        <div>
            <h1>Pick a color, add a box!</h1>
            <form onSubmit ={ (e) => e.preventDefault() }>
                <div>
                    <label>Color:</label>
                    <input value = { boxColor } type="text" onChange ={ handleColor } />
                </div>
                <div>
                    <label>Height:</label>
                    <input value = { boxHeight }type="text" onChange ={ handleHeight } />
                </div>
                <div>
                    <label>Width:</label>
                    <input value = { boxWidth }type="text" onChange ={ handleWidth } />
                </div>
                <button type = "submit" onClick = { createBox }>Add Box</button>
            </form>
        </div>
    );
}

export default ColorForm;