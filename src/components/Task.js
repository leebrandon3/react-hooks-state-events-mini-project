import React from "react";

function Task({task, deleteTask, id}) {
  const {text, category} = task
  return (
    <div className="task" id={id}>
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={event => deleteTask(event)}>X</button>
    </div>
  );
}

export default Task;
