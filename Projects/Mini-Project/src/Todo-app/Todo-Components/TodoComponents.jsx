import AppName from "../AppName";
import AddTodo from "../AddTodo";
import TodoListItem from "../TodoListItem";
function TodoComponents() {
  return (
  <>
 <div className="todo-contener">
     <AppName/>
  <AddTodo/>
  <TodoListItem/>
 </div>
  </>
  )
}

export default TodoComponents