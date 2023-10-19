import React, { useState } from "react";

export default function SnapShot() {
  const [count, setCount] = useState(0);

  const showCount = () => {
    // alert จะทำงานที่ snapshot ที่กดผุ่ม showCount
    // handler also has its own version in each render
    setTimeout(() => {
      alert(count);
    }, 3000);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add count</button>
      <button onClick={() => showCount()}>show count</button>
    </div>
  );
}
