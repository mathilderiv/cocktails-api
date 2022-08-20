import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Spinner from "../components/Spinner";
import Input from "../components/Input";
import Button from "../components/LettersButton";

function Home() {
  const [cocktails, setCocktails] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState("b");
  const [isLoading, setIsLoading] = useState(true);

  const choosingLetter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
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

  if (isLoading) return <Spinner />;
  return (
    <>
      <Input />
      <Button
        setSelectedLetters={setSelectedLetters}
        selectedLetters={selectedLetters}
      />

      <div className="map">
        {cocktails.map((cocktail) => {
          return (
            <div className="cocktail-description">
              <p key={cocktail.idDrink}> {cocktail.strDrink}</p>
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
