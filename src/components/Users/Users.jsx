import s from "./Users.module.css";
import User from "./User/User";
export default function Users({ users, onClick, onChange, reset, onComplete }) {
  return (
    <ul className={s.users}>
      {users.map(({ id, todo, complete }) => {
        return (
          <User
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
