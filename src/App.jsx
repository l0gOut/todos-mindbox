import { useState } from "react";
import Todo from "./components/Todo.jsx";
import "./App.scss";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState("all");

  // Удаление всех выполненных "todo"
  function deleteAllCompletedTodo() {
    const newTodos = todos.filter(value => !value.completed);
    setTodos(newTodos);
  }

  // Создание "todo" при нажатии "Enter"
  function addTodoHotKey(key) {
    if (newTodo.length === 0 || key !== "Enter") return; // Если поле пусто или была нажат не "Enter", то функция не выполняется
    setTodos([...todos, { title: newTodo, completed: false }]);
    setNewTodo("");
  }

  // Изменяет выполнение "todo" находя её по индексу
  function changeCompleted(index) {
    todos.splice(index, 1, {
      title: todos[index].title,
      completed: !todos[index].completed,
    });
    setTodos([...todos]);
  }

  // Удаляет "todo" из массива по индексу
  function deleteTodo(index) {
    todos.splice(index, 1);
    setTodos([...todos]);
  }

  // Считывает сколько не выполненных "todo"
  function amountTodoNotCompleted() {
    let number = 0;

    // Подсчет кол-ва не выполненных "todo"
    todos.forEach(value => {
      if (!value.completed) ++number;
    });

    return number;
  }

  // Функция смены отображения "todo"
  function changeValue(e) {
    setActiveTodos(e.target.value);
  }

  // Отображает массив так как захотел этого пользователь
  function printTodos() {
    switch (activeTodos) {
      // Отображение не выполненных "todo"
      case "active":
        return todos.map((value, index) => {
          // Если "todo"не выполнена, то возвращает объект
          if (!value.completed)
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
          else return false;
        });
      // Отображение выполненных "todo"
      case "completed":
        return todos.map((value, index) => {
          // Если "todo" выполнена, то возвращает объект
          if (value.completed)
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
          else return false;
        });
      // Отображение всех "todo"
      default:
        return todos.map((value, index) => {
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
        });
    }
  }

  return (
    <div className="app">
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        onKeyDown={e => addTodoHotKey(e.key)}
        placeholder="Создать новую заметку..."
      />
      {printTodos() /*  Вызов функции отображения "todo" */}
      <div className="actives">
        <p>
          {/* Отображение того сколько осталось выполнить "todo" */}
          {amountTodoNotCompleted()
            ? `${amountTodoNotCompleted()} осталось выполнить`
            : "Всё выполнено!"}
        </p>
        <div className="todo-actives">
          <input
            type="radio"
            name="todo-UI"
            id="todo-all"
            value="all"
            checked={activeTodos === "all"}
            onChange={e => changeValue(e)}
          />
          <label
            className={activeTodos === "all" ? "checked" : ""}
            htmlFor="todo-all"
          >
            Все
          </label>
          <input
            type="radio"
            name="todo-UI"
            id="todo-active"
            value="active"
            checked={activeTodos === "active"}
            onChange={e => changeValue(e)}
          />
          <label
            className={activeTodos === "active" ? "checked" : ""}
            htmlFor="todo-active"
          >
            Активные
          </label>
          <input
            type="radio"
            name="todo-UI"
            id="todo-completed"
            value="completed"
            checked={activeTodos === "completed"}
            onChange={e => changeValue(e)}
          />
          <label
            className={activeTodos === "completed" ? "checked" : ""}
            htmlFor="todo-completed"
          >
            Выполненные
          </label>
        </div>
        <button
          className="clear-completed"
          onClick={() => deleteAllCompletedTodo()}
        >
          Удалить выполненные
        </button>
      </div>
    </div>
  );
}

export default App;
