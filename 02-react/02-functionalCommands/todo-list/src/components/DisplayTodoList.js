import React, { useState } from 'react';

const DisplayTodoList = (props) => {
    
    const { taskList, setTaskList } = props;


    const deleteTask=(indexFromBelow)=> {
        setTaskList(taskList.filter((todo, index)=> 
            {
                console.log(todo);
                return  index !== indexFromBelow;
            }));
        }
    const todoClasses =[];
    const toggleCompleted = (indexFromBelow) => {
        taskList.map((todo, index) =>{

            if (index === indexFromBelow) {
                todo.isComplete = ! todo.isComplete;
            }
            if (todo.isComplete === true) {
                todoClasses.push("strike-through");
            }
            return todo, todoClasses;
        });
    }

    return (
        <div className="myList" style = {{display:'flex', flexDirection:'column'}}>
            {
                taskList.map((todo, index) => (
                    <div className="task" key={ index }> 
                        
                        <input 
                            type="checkbox" 
                            checked={ todo.isComplete } 
                            onClick= { ()=> toggleCompleted(index) } 
                            className="checkbox"
                        />

                        <span className={ todoClasses.join(" ") } style={{ paddingLeft:40, paddingRight:30}}>{ todo.todo }</span>

                        <button className="btn-del" onClick={ ()=>deleteTask(index) }>Remove</button>
                    </div>
                ))
            }
        </div>
    );
}

export default DisplayTodoList;