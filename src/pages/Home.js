import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Spinner from "../components/Spinner";
import Input from "../components/Input";
import LettersButton from "../components/LettersButton";

function Home() {
  const [cocktails, setCocktails] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState("a");
  const [isLoading, setIsLoading] = useState(true);

  const choosingLetter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  useEffect(() => {
    handleFetch();
  }, [selectedLetters]);

  const handleFetch = () => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${selectedLetters}`
    )
      .then((request) => {
        // console.log(request);
        return request.json();
      })
      .then((response) => {
        console.log(response.drinks);
        setCocktails(response.drinks);
        setIsLoading(false);
      });
  };

  const handleSubmit = (event, research) => {
    event.preventDefault();
    // console.log("research" , research);

    setIsLoading(true);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${research}`
    )
      .then((request) => {
        return request.json();
      })
      .then((response) => {
        console.log(response);
        setCocktails(response.drinks);
        setIsLoading(false);
      });
  };

  // console.log(selectedLetters);
  if (isLoading) return <Spinner />;

  return (
    <>
      <Input handleSubmit={handleSubmit} />
      <div className="letters-buttons">
        {choosingLetter.map((letter, index) => {
          return (
            <LettersButton
              key={index}
              letter={letter}
              setSelectedLetters={setSelectedLetters}
            />
          );
        })}
      </div>

      <div className="map">
        {cocktails.map((cocktail) => {
          return (
            <div key={cocktail.idDrink} className="cocktail-description">
              <p> {cocktail.strDrink}</p>
              <Link to={`/cocktail/${cocktail.idDrink}`}>
                <img src={cocktail.strDrinkThumb} alt={cocktail.idDrink} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
