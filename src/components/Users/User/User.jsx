import { useState } from "react";
import s from "./User.module.css";

export default function User({
  id,
  text,
  complete,
  onClick,
  onChange,
  reset,
  onComplete,
}) {
  const [check, setCheck] = useState(false);
  const disabled = false;
  const handleChange = () => {
    setCheck((prev) => !prev);
    reset();
  };
  return (
    <li key={id} className={s.users__item}>
      <div className={s.users__text_wrapper}>
        <input
          className={s.users__checkbox}
          type="checkbox"
          id={id}
          onChange={handleChange}
          value={check}
          name="check"
        />
        <label className={s.users__check} name="check" htmlFor={id}></label>
        <p
          style={
            complete
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
          className={s.users__text}
        >
          {text}
        </p>
      </div>
      <ul className={s.users__btns_wrapper}>
        <li className={s.users__btn_item}>
          <button
            disabled={!check ?? disabled}
            className={s.users__btn}
            type="button"
            onClick={onChange}
          >
            Edit
          </button>
        </li>
        <li className={s.users__btn_item}>
          {" "}
          <button
            disabled={!check ?? disabled}
            className={s.users__btn}
            type="button"
            onClick={onClick}
          >
            Del
          </button>
        </li>
        <li className={s.users__btn_item}>
          <button
            style={
              !complete
                ? { backgroundColor: "#1884e3", color: "#fff" }
                : { backgroundColor: "green", color: "#fff" }
            }
            className={s.users__btn}
            type="button"
            onClick={onComplete}
          >
            {complete ? "Completed" : "Process"}
          </button>
        </li>
      </ul>
    </li>
  );
}
