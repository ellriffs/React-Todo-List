import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../Styles/task-list.css';

const ListContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const [task, setTasks] = useState([]);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleTask = () => {
    const regex = /\S/g.test(inputValue);
    const id = uuidv4();

    return (
      regex
        ? task.push({
            id: id.slice(0, 3),
            body: inputValue,
          })
        : null,
      setInputValue('')
    );
  };
  const checked = [];

  const handleChecked = (event, index) => {
    // const values = event.target.checked;
    checked.push(index);
    console.log(checked);
  };

  const deleteTask = () => {
    const copyTask = [...task];
    checked.forEach((num) => {
      copyTask.splice(num, 1);
    });
    console.log(copyTask);
    setTasks(copyTask);
  };

  return (
    <div className="list-container">
      <form className="form-container">
        <input
          className="task-input"
          value={inputValue}
          onChange={handleInputValue}
          type="text"
          placeholder="Add Task Here..."
        ></input>
        <button className="add-task" onClick={handleTask} type="button">
          Add Tasks
        </button>
        <button type="button" onClick={deleteTask}>
          Delete completed tasks
        </button>
      </form>

      <ul className="tasks">
        <h2 className="subheading">Tasks To Complete</h2>
        {task.map((tasks, index) => (
          <div div className="task-items">
            <li key={tasks.id}>
              {index + 1}: {tasks.body}
              <input
                className="check-box"
                onChange={(event) => handleChecked(event, index)}
                type="checkbox"
              ></input>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListContainer;
