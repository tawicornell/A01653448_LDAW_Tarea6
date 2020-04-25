import React from "react";
import Todo from "../todo-component/todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      todos: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3100/tasks", {
      method: "GET",
    })
      .then((res) => res.json())

      .then(
        (result) => {
          console.log(result);

          this.setState({
            isLoaded: true,
            tasks: result.tasks,
          });
        },
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, tasks } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {tasks.map((task) => (
            <React.StrictMode>
              <Todo id={task.id} name={task.description}  done={task.status}/>
            </React.StrictMode>
          ))}
        </div>
      );
    }
  }
}

export default TodoList;
