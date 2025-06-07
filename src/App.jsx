import Todo from "./components/Todo";
import "./styles/style.css";

export default function App() {
  const todoList = [{ id: 1, text: "Sample Todo", done: true }];
  
  return (
    <div className="main">
      <Todo items={todoList} />
    </div>
  );
}
