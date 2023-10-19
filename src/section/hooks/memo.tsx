// Using memo will cause React to skip rendering a component if its props have not changed.
import { memo } from "react";

type props = {
  todos?: any;
  addTodo?: any;
};

const Todos = ({ todos, addTodo }: props) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo: any, index: number) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
