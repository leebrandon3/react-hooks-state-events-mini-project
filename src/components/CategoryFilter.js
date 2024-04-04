import React from "react";

function CategoryFilter({categories, taskList, onFilterList}) {
  let i = 0
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(element => {
        i++
        return (<Button key={i} text={element} filterList={filterList}/>)
      })}
    </div>
  );

  function filterList(event){
    const filteredArray = taskList.filter(element => {
      if (event.target.textContent == "All"){
        return true
      }
      else{
        return (element.category == event.target.textContent)
      }
    }) 
    onFilterList(filteredArray)
  }
}

function Button({text, filterList}){
  return <button onClick={event => filterList(event)}>{text}</button>
}

export default CategoryFilter;
