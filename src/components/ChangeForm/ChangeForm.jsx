import s from "./ChangeForm.module.css";
import { useState } from "react";

export default function ChangeForm({ submit }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(todo);
    resetForm();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTodo(value);
  };

  const resetForm = () => {
    setTodo("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.form__input}
        onChange={handleChange}
        name="todo"
        value={todo}
        type="text"
        placeholder="change todo..."
      />
      <button type="submit" className={s.form__btn}>
        Change ToDo
      </button>
    </form>
  );
}
