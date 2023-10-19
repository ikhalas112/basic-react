import { useState } from "react";

export default function BasicForm() {
  const [formValue, setFormValue] = useState("");
  const [isShowValue, setIsFormValue] = useState(false);

  const onSubmit = () => {
    setIsFormValue(true);
  };

  return (
    <div className="container mt-5">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          onChange={(e) => setFormValue(e.target.value)}
        />
      </div>

      <button onClick={() => onSubmit()}>submit</button>

      <br />
      <br />

      {isShowValue && !!formValue && <h1>{formValue}</h1>}
    </div>
  );
}
