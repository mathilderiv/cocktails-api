import { useState } from "react";

function Input() {
  const [research, setResearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="input-search">
      <input
        onChange={(event) => {
          setResearch(event.target.value);
        }}
        type="text"
        name={research}
        placeholder="Choose your cocktails..."
      ></input>
    </div>
  );
}

export default Input;
