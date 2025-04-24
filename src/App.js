import React, { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  // Handle form submission
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  // Handle item removal
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Handle item packing
  function handlePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Handle item quantity change
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
