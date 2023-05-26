import React from "react";
import Button from "react-bootstrap/Button";

const Tasks = ({ task, completeToggel, deleteTask }) => {
  const handleCompleteToggel = () => {
    completeToggel(task.id);
  };
  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <>
      {task.isCompleted && (
        <li className="row my-2">
          <div className="col-6 task">
            <del className="task">{task.text}</del>
          </div>
          <Button
            className="col-2 btn bg-dark text-black-50"
            onClick={handleCompleteToggel}
          >
            Resume
          </Button>
          <Button
            className="col-2 btn btn-warning text-black"
            onClick={handleDeleteTask}
          >
            Delete
          </Button>
        </li>
      )}
      {!task.isCompleted && (
        <li className="row my-2">
          <div className="task col-6">{task.text}</div>
          <Button
            className="col-2 btn btn-secondary text-black"
            onClick={handleCompleteToggel}
          >
            Complete
          </Button>
          <Button
            className="col-2 btn btn-warning text-black"
            onClick={handleDeleteTask}
          >
            Delete
          </Button>
        </li>
      )}
      
    </>
  );
};
export default Tasks;
