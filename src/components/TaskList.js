import React from "react";
import Task from "./Task"

function TaskList({filterList, deleteTask}) {
  let i = 0
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filterList.map(element => {
        i++
        return (<Task task={element} key={i} id={element.text} deleteTask={deleteTask}/>)
      })}
    </div>
  );
}

export default TaskList;
