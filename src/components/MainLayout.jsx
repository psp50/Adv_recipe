import React from "react";
import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="app-shell">
      <nav className="app-nav">
        <Link to="/" className="nav-brand">
          Recipe Flow
        </Link>
        <div className="nav-links">
          <Link to="/" style={{ "--index": 0 }}>
            Home
          </Link>
          <Link to="/favorites" style={{ "--index": 1 }}>
            Favorites
          </Link>
        </div>
      </nav>

      <main className="page-shell">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
