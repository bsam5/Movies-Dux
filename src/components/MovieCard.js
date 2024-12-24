import React from "react";
import "../styles.css";

export default function MoviesGrid({ movie, isWatchlisted, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };
  const getRatingColor = (rating) => {
    if (rating > 8) return "rating-good";
    if (rating >= 5 && rating < 8) return "rating-ok";
    return "rating-bad";
  };
  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingColor(movie.rating)}`}>
            {movie.rating}
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isWatchlisted}
              onChange={()=> toggleWatchlist(movie.id)}
            />

            <span className="slider">
              <span className="slider-label">
                {isWatchlisted ? "In Watchlist" : "Add To Watchlist"}
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
