"use client";

import { useState, useEffect } from "react";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './fetch_functions';

export default function Home() {
  const [toDoList, setToDoList] = useState<{ id: number; List: string; CheckBox: boolean; text: string; }[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchTodos()
      .then((data) => {
        console.log("Fetched data:", data); 
        setToDoList(data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  const addElement = () => {
    const newTodo = { text: inputValue, CheckBox: false };
    addTodo(newTodo)
      .then((addedTodo) => {
        setToDoList([...toDoList, addedTodo]);
        setInputValue("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };


  const toggleCheck = (index: any) => {
    const updatedTodo = { ...toDoList[index], CheckBox: !toDoList[index].CheckBox };
    updateTodo(toDoList[index].id, updatedTodo)
      .then((updated) => {
        const newList = [...toDoList];
        newList[index] = updated;
        setToDoList(newList);
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  };

  const removeElement = (index: any) => {
    const id = toDoList[index].id;
    deleteTodo(id)
      .then(() => {
        const newList = toDoList.filter((_, i) => i !== index);
        setToDoList(newList);
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
      });
  };

  return (
    <div>
      <div id="div">
        <h2>My To Do List</h2>
        <input 
          type="text"
          placeholder="add a new item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addElement}>Add</button>
        <ol>
          {toDoList.map((item, index) => (
            <li id="list"
              key={index}
              onClick={() => toggleCheck(index)}
              style={{
                width: "20%",
                textDecoration: item.CheckBox ? "line-through" : "none",
                background: item.CheckBox ? "lightgreen" : "lightgrey",
                color: item.CheckBox ? "black" : "black",
              }}
            >
              {item.text} 
              <span
                onClick={(e) => {
                  e.stopPropagation();
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
    </div>
  );
}


