import { useState, useEffect } from "react";

import CardItemComponent from "../components/CardItemComponent";
import { fetchData } from "../utilities/apiFetch";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);

  const mealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await fetchData(mealsUrl);
        console.log(data.meals);
        setMeals(data.meals);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchMeals();
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-center dark:text-yellow-500 text-slate-900 pb-4 pt-4">
        Geheime Rezepte Lager
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {meals.length > 0 ? (
          meals.map((food) => (
            <CardItemComponent key={food.idMeal} food={food} />
          ))
        ) : (
          <p>Kein Essen is da </p>
        )}
      </div>
    </>
  );
};
export default MealsPage;
