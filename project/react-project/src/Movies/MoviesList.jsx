import React, { useState, useEffect } from "react";
import MovieCard from "../Card/MovieCard";
import "./MoviesList.css";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");

  
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://imdb.iamidiotareyoutoo.com/search?q=Marvel"
      );
      const data = await response.json();
      setMovies(data.description);
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie["#TITLE"]?.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const clearSearch = () => setFilterQuery("");

  return (
    <div className="movies-list-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
        <button className="clear-btn" onClick={clearSearch}>Clear</button>
      </div>

      <ul className="movies-list">
        {filteredMovies.map((movie, index) => (
          <li className="movies-item" key={index}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;