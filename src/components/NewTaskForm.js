import React from "react";

function NewTaskForm({categories, formObj, onFormObj, submitTask}) {
  const categoriesNoAll = categories.slice(1)
  let i = 0
  return (
    <form className="new-task-form" onSubmit={event => submitTask(event)}>
      <label>
        Details
        <input id="text" type="text" name="text" onChange={event => editsTask(event)} value={formObj.text}/>
      </label>
      <label>
        Category
        <select name="category" id="category" onChange={editsTask} value={formObj.category}>
          {/* render <option> elements for each category here */}
          {categoriesNoAll.map(element => {
            i++
            return <CategoryOptions category={element} key={i}/>
          })}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
  function CategoryOptions({category}){
    return(
      <option value={category}>{category}</option>
    )
  }
  
  function editsTask(event){
      if(event.target.id === "text"){
        onFormObj({...formObj, text: event.target.value})
      }
      if(event.target.id === "category"){
        onFormObj({...formObj, category: event.target.value})
      }
  }
}

export default NewTaskForm;
