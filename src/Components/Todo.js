import React, { useState } from "react";
import Todolist from "./Todolist/Todolist";
import Todocreate from "./Todocreate/Todocreate";

function Todos() {
    const [todoItems, setTodoItems] = useState("");
    const [items, setItems] = useState([]);

    const handlesubmit = (event) => {
        event.preventDefault();
        if (todoItems.length == 0) {
            return alert("You cant create empty message");
        }
        setItems([...items, todoItems]);
        setTodoItems("");
    };

    const handlechange = (event) => {
        setTodoItems(event.target.value);
    };

    const handledelete = (event) => {
        let array = [...items];
        const index = array.indexOf(event.target.value);
        if (index > -1) {
            array.splice(index, 1);
            setItems(array);
        }
    };
    return (
        <div className="Todos">
            <h1>Simple Todolist App</h1>
            <Todocreate handlechange={handlechange} handlesubmit={handlesubmit} todoItems={todoItems} />
            <Todolist items={items} handledelete={handledelete} />
        </div>
    );
}

export default Todos;
