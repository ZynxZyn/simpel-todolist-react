import React from "react";
import "./Todocreate.css";

function Todocreate(props) {
    return (
        <div className="Todocreate">
            <form onSubmit={props.handlesubmit}>
                <input type="text" placeholder="Input a todolist" onChange={props.handlechange} value={props.todoItems} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Todocreate;
