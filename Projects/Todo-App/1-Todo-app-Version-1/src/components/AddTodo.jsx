import { useState } from "react";

function AddTodo({ onAddTodo }) {  // ← Add this prop!
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");

  const handleAddClick = () => {
    if (todoName.trim() === "" || todoDueDate === "") {  // ← Fixed: todoDueDate
      alert("Please enter a task name and due date");
      return;
    }

    // ← These lines should be HERE, inside the function
    onAddTodo(todoName, todoDueDate);  // ← Fixed: onAddTodo (not AddTodo)
    
    setTodoName("");
    setTodoDueDate("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddClick();
    }
  };

  return (
    <div className="add-todo-container">
      <div className="add-todo-form">
        <input 
          type="text" 
          className="todo-input" 
          placeholder="What needs to be done?"
          value={todoName}
          onChange={(event) => setTodoName(event.target.value)}
          onKeyPress={handleKeyPress} 
        />
        <input 
          type="date" 
          className="todo-date"
          value={todoDueDate}  // ← Fixed: todoDueDate
          onChange={(event) => setTodoDueDate(event.target.value)} 
        />
        <button className="btn-add" onClick={handleAddClick}>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTodo;