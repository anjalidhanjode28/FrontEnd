import "./styles.css";
import React from "react";
import Todo from "./Components/Todo.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>LIST OF ITEMS</h1>
      <Todo />
    </div>
  );
}