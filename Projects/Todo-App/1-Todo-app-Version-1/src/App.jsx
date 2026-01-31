import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id:1,
      name:"buy milk",
      dueDate:"2025-12-01",
      completed:false,
    },
    {id: 2,
      name: "buy bread",
      dueDate: "2025-12-02",
      completed: false,
    }
  ]);

  const handleAddTodo = (todoName,todoDueDate)=>{
    const newTodo={
      id: Date.now(),
      name:todoName,
      dueDate:todoDueDate,
      completed:false
    };
    setTodoItems([...todoItems,newTodo]);
  }
  const handleDeleteTodo=(todoId)=>{
    const updatedTodos = todoItems.filter(item=>item.id !== todoId);
    setTodoItems(updatedTodos)
  }
  useEffect(()=>{
    localStorage.setItem("todoItems",JSON.stringify(todoItems));
  },[todoItems])
  useEffect(()=>{
    const savedTodoItems = localStorage.getItem("todoItems");
    if(savedTodoItems){
      setTodoItems(JSON.parse(savedTodoItems));
    }
  },[])
  return (
    <div className="todo-container">
      <AppName />
      <AddTodo onAddTodo={handleAddTodo}/>
      <TodoItems todoItems={todoItems} onDeleteTodo={handleDeleteTodo}/>
    </div>
  );
}
export default App;
