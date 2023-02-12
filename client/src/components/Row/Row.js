import React, { useEffect, useState } from "react";
import "./Row.style.css";
import instance from "../../utils/axios";
import { baseImageURL } from "../../utils/requests";

function Row({ title, fetchUrl, isLarge = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await instance.get(fetchUrl);
      setMovies(res.data.results);
      return res;
    }
    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="row__container">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLarge && "row__posterLarge"}`}
                key={movie.id}
                src={`${baseImageURL}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
