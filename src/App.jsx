import { useState } from "react";
import Todo from "./components/Todo.jsx";
import "./App.scss";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo(key) {
    if (newTodo.length === 0 || key !== "Enter") return;

    setTodos([...todos, { title: newTodo, completed: false }]);
    setNewTodo("");
  }

  function changeCompleted(index) {
    todos.splice(index, 1, {
      title: todos[index].title,
      completed: !todos[index].completed,
    });
    setTodos([...todos]);
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    setTodos([...todos]);
  }

  return (
    <div className="App">
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        onKeyDown={e => addTodo(e.key)}
      />
      {todos.map((value, index) => {
        return (
          <Todo
            index={index}
            title={value.title}
            completed={value.completed}
            deleteTodo={deleteTodo}
            changeCompleted={changeCompleted}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default App;
