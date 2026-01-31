

function TodoItem({ todoName, todoDate,todoId,onDeleteTodo }) {

  const handleDeleteClick=()=>{
    onDeleteTodo(todoId)
  }
  return (
    <div className="todo-item">
      <div className="todo-content">
        <span className="todo-name">{todoName}</span>
        <span className="todo-date">{todoDate}</span>
      </div>
      <button className="btn-delete" onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default TodoItem;