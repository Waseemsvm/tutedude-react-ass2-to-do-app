import { useState } from "react";

export default function TodoInput(props) {
  const [value, setValue] = useState("");
  return (
    <div className="todo-input">
      <input
        className="todo-input-inner"
        placeholder="Add a new Task"
        value={value}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            props.onAdd(value);
            setValue("");
          }
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        className="todo-input-btn"
        onClick={() => {
          props.onAdd(value);
          setValue("");
        }}
      >
        +
      </button>
    </div>
  );
}
