// memoized value

import { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t: string[]) => [...t, "New Todo"]);
  };

  const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  // const calculation = expensiveCalculation(count);

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo: any, index: number) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}
