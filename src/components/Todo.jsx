function Todo({ index, title, completed, changeCompleted, deleteTodo }) {
  return (
    // Изменяет класс в зависимости от выполненной заметки
    <div className={`todo ${completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => changeCompleted(index)}
        id={`checkbox-${index}`}
      />
      <label
        className={completed ? "checked" : ""}
        htmlFor={`checkbox-${index}`}
      >
        <h1>&#10004;</h1>
      </label>
      <p>{title}</p>
      <button onClick={() => deleteTodo(index)}>&times;</button>
    </div>
  );
}

export default Todo;
