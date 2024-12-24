import React from "react";
import "../styles.css";
import MoviesCard from "./MovieCard";
export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">you'r Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MoviesCard
              movie={movie}
              key={movie.id}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            />
          );
        })}
      </div>
    </div>
  );
}
