import React, { useState } from 'react';

const TodoForm = (props) => {
    const [ todo, setTodo ] = useState("");
    const { taskList, setTaskList } = props;

    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = { todo, isComplete:false };
        console.log("Task", newTodo);
        setTaskList([...taskList, newTodo]);
        setTodo("");
    }

    const handleTodo = (e) => {
        setTodo(e.target.value);
    }

    return (
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div className="myList">
                    <input 
                        value={ todo }
                        type="text" 
                        onChange ={ handleTodo }
                        className="input"
                    />
                    <button className="btn" type="submit" onClick={ addTodo }>Add</button>
                </div>
                
            </form>
        </div>
    );





}

export default TodoForm;