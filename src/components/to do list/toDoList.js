import "./toDoList.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Tasks from "./tasks list/Tasks";
import ListGroup from "react-bootstrap/ListGroup";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskData = {
        id: Math.floor(Math.random() * 100),
        text: newTask,
        isCompleted: false,
      };
      setTasks([...tasks, newTaskData]);
      setNewTask("");
    }
  };

  const completeToggel = (id) => {
    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((tasks) => {
      return tasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div>
      <h3>To-Do App!</h3>
      <Form className="text-white bg-dark">
        <Form.Group>
          <Form.Label>Add New TO-DO</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter new task"
            value={newTask}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </Form.Group>
        <Button
          className="m-2 text-white bg-dark border-secondary"
          variant="tertiary"
          onClick={addTask}
        >
          Add
        </Button>
      </Form>
      <h3 className="my-4">Let's get some work done!</h3>

      <ListGroup className="toDoList">
        {tasks.map((task) => (
          <Tasks
            key={task.id}
            task={task}
            completeToggel={completeToggel}
            deleteTask={deleteTask}
          />
        ))}
      </ListGroup>
    </div>
  );
};
export default ToDoList;
