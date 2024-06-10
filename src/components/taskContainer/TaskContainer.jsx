import { useState } from "react";
import { FilterContainer, StyledTaskContainer, StyledTaskFooter, StyledTaskPending } from "./TaskContainer.styles";

const TaskContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [allTasks, setAllTasks] = useState([]); // Guarda todas las tareas

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if(inputValue) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setAllTasks([...tasks, { text: inputValue, completed: false }]); // Guarda todas las tareas
      setInputValue('');
    }
  };

  const taskCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (index === i) {
        return {
          ...task,
          completed: !task.completed // Cambia el estado de completado
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const remainingItems = tasks.filter(task => !task.completed).length;

  const clearComplete = () => {
    const pendingTasks = tasks.filter(task => !task.completed);
    setTasks(pendingTasks);
  };

  const showCompletedTasks = () => {
    const completedTasks = tasks.filter(task => task.completed);
    setTasks(completedTasks);
  };
  const showActiveTasks = () => {
    const ActiveTasks = tasks.filter(task => !task.completed);
    setTasks(ActiveTasks);
  };
  const showAllTask = () => {
    setTasks(allTasks); // Restaura todas las tareas
  };

  return (
    <form onSubmit={handleAddTask}>
      <StyledTaskContainer>
        <input type="checkbox" name="" id="" />
        <input placeholder="Create a new todo..." type="text" value={inputValue} onChange={handleInputChange} />
        <input type="submit" value="Add" />
      </StyledTaskContainer>

      {tasks.map((task, index) => (
        <StyledTaskPending key={index}>
          <input 
            type="checkbox" 
            name="" 
            id="" 
            checked={task.completed} 
            onChange={() => taskCompleted(index)} 
          />
          <h1>{task.text}</h1>
        </StyledTaskPending>
      ))}

      <StyledTaskFooter>
        <div><p>{remainingItems} Items Left</p></div>
        <FilterContainer>
          <div><a href="#" onClick={showAllTask}>All</a></div>
          <div><a href="#" onClick={showActiveTasks}>Active</a></div>
          <div><a href="#" onClick={showCompletedTasks}>Completed</a></div>
        </FilterContainer>
        <div><a href="#" onClick={clearComplete}><p>Clear Completed</p></a></div>
      </StyledTaskFooter>
    </form>
  );
}

export default TaskContainer;