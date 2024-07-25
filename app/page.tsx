"use client";

import { useState } from "react";
import { fetchTodos } from './fetch_functions';
console.log(fetchTodos);
export default function Home() {
  const [toDoList, setToDoList] = useState([
    { text: "something", checked: false },

  ]);
  const [inputValue, setInputValue] = useState("");

  const addElement = () => {
    setToDoList([...toDoList, { text: inputValue, checked: false }]);
    setInputValue("");
  };

  const toggleCheck = (index: number) => {
    const newList = [...toDoList];
    newList[index].checked = !newList[index].checked;
    setToDoList(newList);
  };

  
  const removeElement = (index: number) => {
    const newList = toDoList.filter((_, i) => i !== index);
    setToDoList(newList);
  };

  return (
    <div id="div">
      <h2>My To Do List</h2>
      <input 
        type="text"
        placeholder="add a new item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addElement}>Add</button>
      <ol >
        {toDoList.map((item, index) => (
          <li id="list"
            key={index}
            onClick={() => toggleCheck(index)}
            style={{
              
              width: "20%",
              textDecoration: item.checked ? "line-through" : "none",
              background: item.checked ? "lightgreen" : "lightgrey",
              color: item.checked ? "black" : "black",
            }}
          >
            {item.text}
            <span
              onClick={(e) => {e.stopPropagation();
                removeElement(index);
              }}
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                color: "red",
              }}
            >x
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
