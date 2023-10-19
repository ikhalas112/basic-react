import { useEffect, useState } from "react";
import Component from "./Component";

export default function BasicHook() {
  const [isShowCom1, setIsShowCom1] = useState<boolean>(true);

  useEffect(() => {}, []);

  // console.log(`I'm render`);

  const toggle = () => {
    setIsShowCom1((prev) => !prev);
  };

  return (
    <div>
      {isShowCom1.toString()}
      <br />
      {/* {<Component />} */}

      <br></br>

      {/* <button onClick={() => setIsShowCom1(!isShowCom1)}>
        {isShowCom1 ? "hide com 1" : "show com 1"}
      </button> */}

      <button onClick={() => toggle()}>
        {isShowCom1 ? "hide com 1" : "show com 1"}
      </button>
    </div>
  );
}

// # useState : value , setter , prevValue , rerender
// # useEffect : mount , unmount , update
