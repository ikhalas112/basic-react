import React, { useState } from "react";
import { getHeroDetail } from "./api";

export default function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    const response = await getHeroDetail(text);
    setData(response);
    setLoading(false);
  };

  return (
    <div>
      <label htmlFor="hero-name">Search</label>
      <input
        id="hero-name"
        placeholder="Type a hero name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>Submit</button>
      {loading && <div>loading</div>}
      {data && (
        <div>
          <img src={data.avatar} alt={`Avatar of ${data.name}`} />
          <div>
            <div>{data.name}</div>
            <div>{data.description}</div>
          </div>
        </div>
      )}
    </div>
  );
}
