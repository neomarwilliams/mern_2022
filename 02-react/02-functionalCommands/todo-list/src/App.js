import React, { useState } from 'react';
import './App.css';
import DisplayTodoList from './components/DisplayTodoList';
import TodoForm from './components/TodoForm';

function App() {

  const [ taskList, setTaskList ] = useState([]);


  return (
    <div className="App">

      <TodoForm taskList={ taskList } setTaskList ={ setTaskList } />
      <DisplayTodoList taskList={ taskList } setTaskList ={ setTaskList } />

    </div>
  );
}

export default App;
