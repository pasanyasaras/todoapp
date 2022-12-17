import { useState } from "react";
import "./TodoInput.css";
import {PlusIcon} from '@heroicons/react/outline';
function TodoInput({todos,setTodos}){

    const [todo, setTodo] = useState("");
    const handleClick = () => {
        const newTodo = {
            id: 1,
            name: todo,
            isCompleted:false,
        }
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        setTodo("");

    }

    return (
        <div className="todo-input-wrapper">
            <input type="text" placeholder="Enter your todo..." value={todo} onChange={(event)=>{
                setTodo(event.target.value);
            }}/>
            <button onClick={handleClick}> 
               <PlusIcon className="plus-icon" style={{width:"18px", height:"18px"}}/> 
            </button>
        </div>
    )
}

export default TodoInput;