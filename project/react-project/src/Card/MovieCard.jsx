import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      {movie["#IMG_POSTER"] ? (
        <img src={movie["#IMG_POSTER"]} alt={movie["#TITLE"]} />
      ) : (
        <div className="no-image">No Image</div>
      )}
      <h3>{movie["#TITLE"]}</h3>
      <p>{movie["#YEAR"] ? `Year: ${movie["#YEAR"]}` : "Year unknown"}</p>
      <p>{movie["#RANK"] ? `Rank: ${movie["#RANK"]}` : "Rank unknown"}</p>
      <p>{movie["#ACTORS"] ? `Actors: ${movie["#ACTORS"]}` : "Actors unknown"}</p>
    </div>
  );
}

export default MovieCard;
