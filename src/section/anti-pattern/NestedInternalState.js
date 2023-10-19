import React, { useEffect, useState } from "react";

// ต้องระวังในการ rerender แต่ละครั้ง state ใน level ต่ำลงไป จะถูก re ไปด้วย
// วิธีแก้ เช่น context memo callback หรือ redux

function Level1({ text: initialText }) {
  const [text, setText] = useState(initialText);
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default function Demo({ partialData = { name: "Jun" } }) {
  const [data, setData] = useState(partialData);
  useEffect(() => {
    (async function () {
      const response = await Promise.resolve({
        comments: [{ text: "teest", id: 0 }],
      });
      setData((latestData) => ({
        ...latestData,
        ...response,
      }));
    })();
  }, []);

  const doSomethingWithComments = () => {
    //
  };

  return (
    <div>
      <h3>Name: {data.name}</h3>
      {data.comments &&
        data.comments.map(({ id, text }) => <Level1 text={text} key={id} />)}
      <br />
      <button onClick={() => alert(JSON.stringify(data, null, 2))}>
        Flush comments
      </button>
    </div>
  );
}
