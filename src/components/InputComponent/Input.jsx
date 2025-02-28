import React, { useState } from "react";

export default function Input({ addItem }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addItem(text);
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="grocery-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter grocery item"
        className="grocery-input"
      />
      <button type="submit" className="add-btn">
        Add Item
      </button>
    </form>
  );
}
