function Todo({ index, title, completed, changeCompleted, deleteTodo }) {
  return (
    // Изменяет класс в зависимости от выполненной заметки
    <div className={`todo ${completed ? "completed" : ""}`}>
      <div className="checkbox-title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => changeCompleted(index)}
          id={`checkbox-${index}`}
        />
        {/* Нужен для кастомизации собственного чекбокса */}
        <label
          className={completed ? "checked" : ""}
          htmlFor={`checkbox-${index}`}
        >
          <h1>&#10004;</h1>
        </label>
        <p>{title}</p>
      </div>
      <button onClick={() => deleteTodo(index)}>&times;</button>
    </div>
  );
}

export default Todo;
