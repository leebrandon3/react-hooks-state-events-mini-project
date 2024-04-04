import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  let tasks = TASKS
  const [taskList, onTaskList] = useState(TASKS)
  const [formObj, onFormObj] = useState({
    text: "",
    category: "Code"
  })

  const [filterList, onFilterList] = useState(taskList)

  function submitTask(event){
    event.preventDefault()
    console.log("submitting")
    onTaskList([...taskList, {
      text: formObj.text,
      category: formObj.category
    }])
    onFilterList([...taskList, {
      text: formObj.text,
      category: formObj.category
    }])
  }

  function deleteTask(event){
    console.log(event.target.parentElement.id)
    const updatedTasks = taskList.filter(element => {
      return (element.text != event.target.parentElement.id)
    })
    onTaskList(updatedTasks)
    onFilterList(updatedTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} taskList={taskList} onFilterList={onFilterList}/>
      <NewTaskForm categories={CATEGORIES} formObj={formObj}onFormObj={onFormObj} submitTask={submitTask}/>
      <TaskList filterList={filterList} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
