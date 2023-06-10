const Filter = ({
  filterList,
  setFilterList,
  activeTaskList,
  clearListHandler,
  todoList
}) => {
  return (
    <div className="filter-container">
      <div>
        {activeTaskList().length >= 0 && filterList === "Active" && (
          <p>{activeTaskList().length} Remaining Task</p>
        )}

        {todoList.length >= 0 && filterList === "All" && (
          <p>{todoList.length} Remaining Task</p>
        )}
      </div>
      <div className="filter-btns">
        <button
          className={`${filterList === "All" && "active-link"}`}
          onClick={() => setFilterList("All")}
        >
          All
        </button>
        <button
          className={`${filterList === "Active" && "active-link"}`}
          onClick={() => setFilterList("Active")}
        >
          Active
        </button>
        <button
          className={`${filterList === "Completed" && "active-link"}`}
          onClick={() => setFilterList("Completed")}
        >
          Completed
        </button>
      </div>
      <div>
        {
          <p className="cursor-pointer" onClick={() => clearListHandler()}>
            Clear Completed Tasks
          </p>
        }
      </div>
    </div>
  );
};

export default Filter;
