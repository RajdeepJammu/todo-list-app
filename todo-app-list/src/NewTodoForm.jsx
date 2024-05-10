import { useState } from "react";

export function NewTodoForm(props) {
  props.onSubmit;
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem !== "") {
      props.onSubmit(newItem); // Call the onSubmit prop function
      setNewItem(""); // Reset newItem state to empty
    }
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        ></input>
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
