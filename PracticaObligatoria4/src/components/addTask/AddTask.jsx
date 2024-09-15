import { Card, Col, Button, Form } from 'react-bootstrap'; // Asegúrate de importar Button
import { useState } from 'react';
import TaskList from '../list/TaskList';

const AddTask = ({ addTask, taskCount}) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim()) { 
      addTask(taskText); 
      setTaskText(''); 
    }
  };

  return (
    <Col lg="4">
      <Card style={{ width: '18rem', margin: "1em", color: "white", backgroundColor: "grey", border: "3px black" }}>
        <Card.Body>
          <Card.Title>Agregar Tarea</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="taskInput">
              <Form.Label>Tarea</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe una tarea"
                value={taskText}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddTask}>
              Agregar Tarea
            </Button>
            <p>Tareas totales: {taskCount}</p>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AddTask;