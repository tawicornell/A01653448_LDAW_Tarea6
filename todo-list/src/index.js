import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todo from "./todo-component/todo";
import TodoList from "./todo-list-component/todo-list";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h2>GD #6 - Gestión de tareas con React </h2>
      <div className="addTodo">
        <form action="http://localhost:3100/tasks" method="POST"> 
          <input type="text" name="todo" required/>
          <input className="button" type="submit" value="Añadir" />
        </form>
      </div>
      <TodoList/>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
