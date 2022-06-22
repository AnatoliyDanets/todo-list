import Todo from "./Todo";
import s from "./Todos.module.css";

export default function Todos({ users, onClick, onChange, reset, onComplete }) {
  return (
    <ul className={s.users}>
      {users.map(({ id, todo, complete }) => {
        return (
          <Todo
            key={id}
            id={id}
            text={todo}
            complete={complete}
            onClick={() => {
              onClick(id);
            }}
            onChange={() => {
              onChange(id);
            }}
            reset={reset}
            onComplete={() => {
              onComplete(id);
            }}
          />
        );
      })}
    </ul>
  );
}
