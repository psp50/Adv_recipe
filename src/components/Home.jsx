// https://www.themealdb.com/api/json/v1/1/search.php?s=  // search by name

// https://www.themealdb.com/api/json/v1/1/lookup.php?i= // search by Id

import React, { useEffect, useState } from "react";
import {Link, useSearchParams } from "react-router-dom";

function Home() {
  const [recipe, setRecipe] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals || []));
  }, [query]);
    console.log(recipe);
  return (
    <section className="home-page page-card">
      <header className="page-header">
        <div>
          <p className="eyebrow">Search the menu</p>
          <h2>Recipe App</h2>
        </div>

        <span className="meta-pill">{recipe.length} results</span>
      </header>

      <input
        className="search-input"
        value={query}
        onChange={(e) => setSearchParams({ q: e.target.value })}
        placeholder="Search Recipes"
        aria-label="Search Recipes"
      />

      <ul className="recipe-grid">
        {recipe.map((meal, index) => (
          <li
            key={meal.idMeal}
            className="recipe-card"
            style={{ "--index": index }}
          >
            <Link to={`/recipe/${meal.idMeal}`}>
              <span>{meal.strMeal}</span>
              <small>{meal.strCategory}</small>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
