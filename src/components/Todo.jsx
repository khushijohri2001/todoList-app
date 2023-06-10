import { completeTaskHandler, deleteItemHandler } from "../utils/utilities";

const Todo = ({ item, todoList, setTodoList, index }) => {
  return (
    <div
      key={item.id}
      className={`todo-item-container background ${
        index % 2 === 0 ? "border-blue" : "border-purple"
      }`}
    >
      <input
        type="checkbox"
        class="checkbox-round"
        onClick={() => completeTaskHandler(item, todoList, setTodoList)}
        checked={item.isCompleted}
      />
      <p onClick={() => completeTaskHandler(item, todoList, setTodoList)}>
        {item.isCompleted ? <s>{item.task}</s> : item.task}
      </p>
      <h4
        className="delete-btn"
        onClick={() => deleteItemHandler(item.id, todoList, setTodoList)}
      >
        X
      </h4>
    </div>
  );
};

export default Todo;
