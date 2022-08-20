import React from "react";

function LettersButton({ letter, setSelectedLetters }) {
  return (
    <button
      onClick={() => {
        setSelectedLetters(letter);
      }}
    >
      {letter}
    </button>
  );
}

export default LettersButton;
