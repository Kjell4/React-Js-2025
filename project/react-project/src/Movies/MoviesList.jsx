import React, { useState } from "react";
import MovieCard from "../Card/MovieCard";
import "./MoviesList.css";

function MoviesList() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {

      const response = await fetch(
        "https://imdb.iamidiotareyoutoo.com/search?q=Marvel"
      );
      const data = await response.json();
      setMovies(data.description);

  };

  return (
    <div className="movies-list-container">
      <button className="load-button" onClick={fetchMovies}>Load movies</button>

      <ul className="movies-list">
        {movies.map((movie, index) => (
          <li className="movies-item" key={index}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
