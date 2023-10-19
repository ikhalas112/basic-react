import { useState, createContext } from "react";
import Component1 from "./Component1";

export const UserContext = createContext("");

export default function useContext() {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <button onClick={() => setUser("Jame")}>Rename</button>
      <Component1 />
    </UserContext.Provider>
  );
}
