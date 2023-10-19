import React, { useState, useEffect } from "react";

function Child({ text, setText }) {
  useEffect(() => {
    setText(text);
  }, []);
  return <div>{text}</div>;
}

export default function Demo() {
  const [list, setList] = useState([]);

  // show แค่ Haha
  // เพราะ เมื่อมีการ setState ติดๆ กัน React จะ batch setStat ให้เหลือ การ rerender เพียงครั้งเดียว การ spread จึงเอา array เปล่า ใน initial state ไปใช้
  const setText = (text) => setList([...list, text]);

  // วิธีแก้
  //  const setText = (text) => setList((latestList) => [...latestList, text]);
  return (
    <div>
      <div>result : {list.join(", ")}</div>
      <Child text="item 1" setText={setText} />
      <Child text="World" setText={setText} />
      <Child text="Haha" setText={setText} />
    </div>
  );
}
