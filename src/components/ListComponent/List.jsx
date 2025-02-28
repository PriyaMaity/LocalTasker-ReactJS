import React from "react";

export default function List({ items, toggleComplete, deleteItem }) {
  return (
    <ul className="grocery-list">
      {items.map((item, index) => (
        <li key={index} className="grocery-item">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleComplete(index)}
          />
          <span className={item.completed ? "completed" : ""}>{item.text}</span>
          <button onClick={() => deleteItem(index)} className="delete-btn">
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
}
