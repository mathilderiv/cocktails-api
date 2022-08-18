import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Input from "../components/Input";

function Home() {
  const [cocktails, setCocktails] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState();
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

  useEffect(() => {
    handleFetch();
  }, [selectedLetters]);

  // useEffect(() => {
  //   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
  //     .then((request) => {
  //       // console.log(request);
  //       return request.json();
  //     })
  //     .then((response) => {
  //       console.log(response.drinks);
  //       setCocktails(response.drinks);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (isLoading) return <Spinner />;
  return (
    <>
      <Input />
      <div className="map">
        {cocktails.map((cocktail, index) => {
          return (
            <div className="cocktail-description">
              <p key={cocktail.idDrink}> {cocktail.strDrink}</p>
              <img src={cocktail.strDrinkThumb} alt={cocktail.idDrink} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
