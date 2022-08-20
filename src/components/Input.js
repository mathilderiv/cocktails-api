import { useState } from "react";

function Input({ handleSubmit }) {
  const [research, setResearch] = useState("");

  return (
    <div className="input-search">
      <form
        onSubmit={(event) => {
          handleSubmit(event, research);
        }}
      >
        <label htmlFor="inputCocktails"></label>
        <input
          onChange={(event) => {
            setResearch(event.target.value);
          }}
          id="inputCocktails"
          type="text"
          name={research}
          placeholder="Choose your cocktails..."
        ></input>
      </form>
    </div>
  );
}

export default Input;
