import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { useState } from "react";

const initTodos = [
  {
    id: 1,
    todo: "Выучить JavaScript",
    complete: false,
  },
  {
    id: 2,
    todo: "Выучить React",
    complete: false,
  },
  {
    id: 3,
    todo: "Выучить Node",
    complete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initTodos);
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);

  const addTodo = (todo) => {
    if (todo === "") {
      alert("empty");
      return;
    }
    const newTodo = {
      id: Date.now(),
      todo,
      complete: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  const changeTodo = (todo) => {
    const newTodo = {
      id: idx,
      todo,
      complete: false,
    };

    if (newTodo.todo === "") {
      alert("empty");
      return;
    }
    setTodos([
      ...todos.map((el) => {
        if (el.id === idx) {
          el = newTodo;
        }

        return el;
      }),
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
    setShow(false);
  };
  const handleCompleteTodo = (id) => {
    setTodos([
      ...todos.map((el) => {
        return el.id === id ? { ...el, complete: !el.complete } : { ...el };
      }),
    ]);
  };
  const handleChangeTodo = (id) => {
    const searchId = todos.find((el) => el.id === id);
    setIdx(searchId.id);
    setShow((prev) => !prev);
  };
  const completeTodos = [...todos.filter((el) => el.complete === false)].length;
  return (
    <div className="App">
      <Form
        submit={show ? changeTodo : addTodo}
        button={show ? " Change Todo" : "Add Todo"}
        placeholder={show ? "change todo..." : "make todo..."}
      />
      <h1>
        {completeTodos < 1 ? "Mission completed" : `Todo List:${completeTodos}`}
      </h1>
      <Todos
        users={todos}
        onClick={deleteTodo}
        onChange={handleChangeTodo}
        reset={() => setShow(false)}
        onComplete={handleCompleteTodo}
      />
    </div>
  );
}

export default App;
