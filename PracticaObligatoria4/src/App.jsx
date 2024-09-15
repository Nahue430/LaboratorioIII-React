import './App.css';
import React, { useState } from 'react';
import Consigna from './components/Consigna';
import AddTask from './components/addTask/AddTask';
import TaskList from './components/list/TaskList';


const App = () => {
  const [task, setTask] = useState([]);// inicializo una lista vacia que va a contener objetos
// Realizamos 4 funciones solicitadas
  const handleAddTask = (taskText) => { 
    const newTask = {
      id: task.length + 1,
      text: taskText,
      complete: false,
    };
    setTask([...task, newTask]);
  };

  const handleDeleteTask = (taskId) => { //taskId es parametro en referencia al atributo que ponemos
    setTask(task.filter((task) => task.id !== taskId));
  };

  const handleCompleteTask = (taskId) => {
    setTask(task.map((task) =>
      task.id === taskId ? { ...task, complete: !task.complete } : task
    ));
  };

  const changeColor = (task) => {
    return task.complete ? 'blue' : 'red';
  };

return (
  <div>
    <Consigna />
    <AddTask addTask={handleAddTask} taskCount={task.length} />
    <TaskList
      tasks={task}
      handleCompleteTask={handleCompleteTask}
      handleDeleteTask={handleDeleteTask}
      changeColor={changeColor}
    />
  </div>
);
};

export default App;
