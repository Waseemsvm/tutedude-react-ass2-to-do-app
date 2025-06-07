export default function TodoItem(props) {
  const { done, text, id } = props.item;
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => {
          // e.target.checked
          props.onToggleChecked(id);
        }}
      />
      <p className={`todo-text ${done && "todo-done"}`}>{text}</p>
      <button
        className="todo-del"
        onClick={(e) => {
          props.onDelete(id);
        }}
      >
        x
      </button>
    </div>
  );
}
