import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

function Home() {
  const letters = [
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

  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then((request) => {
        // console.log(request);
        return request.json();
      })
      .then((response) => {
        // console.log(response.drinks);
        setCocktails(response.drinks);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <div>
      {cocktails.map((cocktail) => {
        return <p key={cocktail.idDrink}> {cocktail.strDrink}</p>;
      })}
    </div>
  );
}

export default Home;
