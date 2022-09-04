import React from "react";
import "./Todolist.css";

function Todolist(props) {
    return (
        <div className="Todolist">
            <ul>
                {props.items.map((item, i) => {
                    return (
                        <li key={i}>
                            {item}
                            <button className="delete" value={item} key={i} onClick={props.handledelete}>
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Todolist;
