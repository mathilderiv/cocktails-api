import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Spinner from "../components/Spinner";

function CocktailDetails() {
  const params = useParams();
  //   console.log(params); ok

  const [cocktail, setCocktail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
    )
      .then((request) => {
        //   console.log(request);
        return request.json();
      })
      .then((response) => {
        console.log(response.drinks);
        setCocktail(response.drinks);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <div>
      {cocktail.map((drink) => {
        return (
          <div>
            <p key={drink.idDrink}>{drink.strDrink}</p>
            <img
              style={{ width: "30%", objectFit: "contain" }}
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CocktailDetails;
