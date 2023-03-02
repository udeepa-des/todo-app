import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  const taskList = props.tasks?.map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />
    )
  );
  const filterList = props.filters?.map((filter) => (
      <FilterButton
        pressed={filter.pressed}
        name={filter.name}
      />
    )
  );
  return (
    <div className="todoapp stack-large">
      <h1>Todo</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
