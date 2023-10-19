import React, { useEffect, useState } from "react";

// custom hook

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    console.log("mount");
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  console.log("re-render");

  return [data];
};

export default function useFetchHook() {
  const [parentState, setParentState] = useState(true);
  return (
    <div>
      <button onClick={() => setParentState((s) => !s)}>
        toggle {parentState.toString()}
      </button>
      <Com1 />
    </div>
  );
}

type Todos = {
  id: string;
  title: string;
};

const Com1 = () => {
  const [data] = useFetch<Todos[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return (
    <>
      {data &&
        data!.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};
