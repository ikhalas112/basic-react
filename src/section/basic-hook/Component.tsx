import { useEffect } from "react";

export default function Component() {
  useEffect(() => {
    console.log("Component mount");

    return () => console.log("Component unmount");
  }, []);

  // console.log("111");

  return (
    <div>
      <h1>Component</h1>
      <p>this is Component</p>
    </div>
  );
}
