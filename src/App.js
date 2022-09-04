import React, { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";

const App = () => {
    return (
        <div className="App">
            <div className="App-header">
                <Todo />
            </div>
        </div>
    );
};

export default App;
