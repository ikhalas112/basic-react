import { useContext } from "react";
import { UserContext } from "./useContext";

export default function Component3() {
  const user = useContext(UserContext);
  return (
    <div>
      Component3
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
}
