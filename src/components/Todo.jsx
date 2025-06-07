import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Alert from "./Alert";
import SuccessMsg from "./SuccessMsg";

export default function Todo(props) {
  const [items, setItems] = useState(props.items.sort((a, b) => b.id - a.id));

  const [openModal, setOpenModal] = useState(false);

  const [openSuccMsg, setOpenSuccMsg] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onDelete = (id) => {
    const index = items.findIndex((i) => i.id == id);
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const onToggleChecked = (id) => {
    const item = items.find((i) => i.id == id);
    item.done = !item.done;
    setItems([...items]);
  };

  const onAdd = (value) => {
    if (!value) return setOpenModal(true);
    setItems(
      [...items, { done: false, text: value, id: items.length + 1 }].sort(
        (a, b) => b.id - a.id
      )
    );

    setOpenSuccMsg(true);
    setTimeout(() => {
      setOpenSuccMsg(false);
    }, 1000);
  };

  return (
    <div className="todo-container">
      <h1>Your To Do</h1>
      <TodoInput onAdd={onAdd} />
      <TodoList
        items={items}
        onDelete={onDelete}
        onToggleChecked={onToggleChecked}
      />
      <p className="todo-counter">
        Your remaining todos: <b>{items.filter((i) => !i.done).length}</b>
      </p>
      <Alert open={openModal} onCloseModal={onCloseModal} />
      <SuccessMsg open={openSuccMsg} />
    </div>
  );
}
