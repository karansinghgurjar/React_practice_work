import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteTodo }) {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item.id}
            todoId={item.id}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </div>
    </>
  );
}
export default TodoItems;
