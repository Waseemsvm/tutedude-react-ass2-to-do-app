import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { items } = props;

  return (
    <div className="todo-list">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <TodoItem
              item={item}
              onDelete={props.onDelete}
              onToggleChecked={props.onToggleChecked}
              onAdd={props.onAdd}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
