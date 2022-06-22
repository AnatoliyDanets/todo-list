import { useState } from "react";
import s from "./Form.module.css";

export default function Form({ submit,button,placeholder }) {
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
        placeholder={placeholder}
      />
      <button type="submit" className={s.form__btn}>
        {button}
      </button>
    </form>
  );
}
