import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Todo from "./components/Todo";
import "./styles.css";
import {
  activeTaskList,
  addItemHandler,
  clearListHandler,
  filterListHandler
} from "./utils/utilities";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputItem, setInputItem] = useState("");
  const [filterList, setFilterList] = useState("All");

  return (
    <div className="container">
      <div className="todo-container">
        <div className="header">
          <h1>TODO List</h1>
          <p>Light</p>
        </div>

        <div className="background input-container">
          <input
            className="task-input"
            value={inputItem}
            onChange={(e) => setInputItem(e.target.value)}
            onKeyPress={(event) =>
              event.key === "Enter" &&
              addItemHandler(setTodoList, inputItem, todoList, setInputItem)
            }
            placeholder="Create New Task Here..."
          />
          <button
            className="task-add-btn"
            onClick={() =>
              addItemHandler(setTodoList, inputItem, todoList, setInputItem)
            }
          >
            Add
          </button>
        </div>

        <div className="todo-list">
          {filterListHandler(filterList, todoList).length > 0 ? (
            filterListHandler(filterList, todoList).map((item, index) => {
              return (
                <div className="task-container">
                  <Todo
                    index={index}
                    item={item}
                    todoList={todoList}
                    setTodoList={setTodoList}
                  />
                </div>
              );
            })
          ) : (
            <p className="no-task-container background">No Tasks Assigned</p>
          )}
        </div>

        <div className="background">
          <Filter
            filterList={filterList}
            setFilterList={setFilterList}
            activeTaskList={() => activeTaskList(todoList, setTodoList)}
            clearListHandler={() => clearListHandler(todoList, setTodoList)}
            todoList={todoList}
          />
        </div>
      </div>
    </div>
  );
}
