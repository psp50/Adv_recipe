import React from "react";

function Favorites() {
  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <section className="favorites-page page-card">
      <div className="page-header">
        <div>
          <p className="eyebrow">Saved flavors</p>
          <h2>Favorites</h2>
        </div>
        <span className="meta-pill">
          {favs.length} recipe{favs.length !== 1 ? "s" : ""}
        </span>
      </div>

      {favs.length === 0 ? (
        <p className="empty-state">
          No favorites yet — search for a recipe and tap the heart to save it.
        </p>
      ) : (
        <div className="favorites-grid">
          {favs.map((id, index) => (
            <article
              key={id}
              className="favorite-card"
              style={{ "--index": index }}
            >
              <span>Recipe #{id}</span>
              <small>Saved to your collection</small>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;