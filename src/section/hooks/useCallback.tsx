// memoized callback function.

import { useState, useCallback } from "react";
import Todos from "./memo";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<any>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // const addTodo = () => {
  //   setTodos((t: any) => [...t, "New Todo"]);
  // };

  const addTodo = useCallback(
    () => setTodos((t: any) => [...t, "New Todo"]),
    [todos]
  );

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
