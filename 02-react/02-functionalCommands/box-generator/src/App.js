import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import DisplayBoxes from './components/DisplayBoxes';
import './App.css';

function App() {

  const [ boxList, setBoxList ] = useState([]);

  return (
    <div className="App">
      <ColorForm boxList= { boxList } setBoxList = { setBoxList }/>
      <DisplayBoxes boxList= { boxList } />
    </div>
  );
}

export default App;
