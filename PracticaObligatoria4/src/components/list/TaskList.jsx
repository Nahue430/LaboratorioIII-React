import React from 'react';
import { Button } from 'react-bootstrap'; // Importa Button de react-bootstrap
import PropTypes from 'prop-types';

const TaskList = ({ tasks, handleCompleteTask, handleDeleteTask, changeColor }) => {
  const buttonStyle = {
    margin: '0 5px', 
    padding: '5px 10px', 
    fontSize: '12px' 
  };
   const itemStyle = {
    marginBottom : '50 px'
   };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ color: changeColor(task),...itemStyle }}>
          {task.text} - {task.complete ? 'Completada' : 'Incompleta'}
          <Button style={buttonStyle} onClick={() => handleCompleteTask(task.id)}>Completar</Button>
          <Button style={buttonStyle} onClick={() => handleDeleteTask(task.id)}>Eliminar</Button>
        </li>
      ))}
    </ul>
  );
};
// hacemos propTypes porque pasamos las funciones del componente APP por parametro
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      complete: PropTypes.bool,
    })
  ).isRequired,
  handleCompleteTask: PropTypes.func,
  handleDeleteTask: PropTypes.func,
  changeColor: PropTypes.func
};

export default TaskList;