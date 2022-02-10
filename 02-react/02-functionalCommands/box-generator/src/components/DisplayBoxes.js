import React, { useState } from 'react';

const DisplayBoxes = (props) => {
    const { boxList } = props;
    return (
        <div style={{display:'flex', justifyContent:"space-around"}}>
            {
                boxList.map((item, index) => 
                    <div key={ index } style={{backgroundColor:item.boxColor, paddingTop:item.boxHeight, paddingRight:item.boxWidth, display:'block', width:item.boxWidth}}>
                        <p>new</p>
                    </div>
                )
            }
        </div>
    );
}

export default DisplayBoxes