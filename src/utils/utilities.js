const addItemHandler = (setTodoList, inputItem, todoList, setInputItem) => {
  setTodoList([
    { id: Date.now(), task: inputItem, isCompleted: false },
    ...todoList
  ]);
  setInputItem("");
};

const deleteItemHandler = (deletedItemId, todoList, setTodoList) => {
  const newTodoList = todoList.filter((item) => item.id !== deletedItemId);

  setTodoList(newTodoList);
};

const completeTaskHandler = (selectedItem, todoList, setTodoList) => {
  const newTodoList = todoList.map((todo) => {
    if (todo.id === selectedItem.id) {
      return {
        ...todo,
        isCompleted: !todo.isCompleted
      };
    }

    return todo;
  });
  setTodoList(newTodoList);
};

const filterListHandler = (filterList, todoList) => {
  if (filterList === "Active") {
    return todoList.filter((todo) => todo.isCompleted === false);
  } else if (filterList === "Completed") {
    return todoList.filter((todo) => todo.isCompleted === true);
  } else {
    return todoList;
  }
};

const clearListHandler = (todoList, setTodoList) => {
  const activeTodoList = todoList.filter((todo) => !todo.isCompleted);
  setTodoList(activeTodoList);
};

const activeTaskList = (todoList) => {
  return todoList.filter((todo) => todo.isCompleted === false);
};

export {
  addItemHandler,
  deleteItemHandler,
  completeTaskHandler,
  filterListHandler,
  clearListHandler,
  activeTaskList
};
