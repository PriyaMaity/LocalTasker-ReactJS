import "./App.css";
import React, { useState, useEffect } from "react";
import List from "./components/ListComponent/List";
import Input from "./components/InputComponent/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("groceryItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("groceryItems", JSON.stringify(items));
  }, [items]);

  const addItem = (text) => {
    setItems([...items, { text, completed: false }]);

    toast.success(`${text} added!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
  };

  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const deletedItem = items[index].text;
    setItems(items.filter((_, i) => i !== index));

    toast.error(`${deletedItem} removed!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
  };
  return (
    <div className="grocery-container">
      <h2>Grocery Bud</h2>

      <Input addItem={addItem} />
      <List
        items={items}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
