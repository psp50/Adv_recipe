import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);
  const [isFav, SetIsFav] = useState(false);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0]);

        const favs =
          JSON.parse(localStorage.getItem("favs")) || [];

        SetIsFav(favs.includes(id));
      });
  }, [id]);

  const toggleFav = () => {
    const favs =
      JSON.parse(localStorage.getItem("favs")) || [];

    let updated;

    if (isFav) {
      updated = favs.filter((x) => x !== id);
    } else {
      updated = [...favs, id];
    }

    localStorage.setItem(
      "favs",
      JSON.stringify(updated)
    );

    SetIsFav(!isFav);
  };

  if (!meal)
    return (
      <div className="loading-state">
        <span className="loader" /> Loading recipe...
      </div>
    );

  return (
    <section className="recipe-page page-card">
      <div className="recipe-topbar">
        <div>
          <p className="eyebrow">Chef's pick</p>
          <h2>{meal.strMeal}</h2>
        </div>
        <button
          className={`favorite-button ${isFav ? "active" : ""}`}
          onClick={toggleFav}
        >
          {isFav ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>

      <article className="recipe-detail-card">
        <img
          className="recipe-thumb"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />

        <div className="recipe-copy">
          <p className="recipe-meta">
            Category <strong>{meal.strCategory}</strong>
          </p>
          <p>{meal.strInstructions}</p>
        </div>
      </article>
    </section>
  );
}

export default Recipe;