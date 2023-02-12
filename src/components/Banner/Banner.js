import React, { useEffect, useState } from "react";
import "./Banner.style.css";
import axios from "../../utils/axios";
import requests, { baseImageURL } from "../../utils/requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
      return res;
    }
    fetchData();
  }, []);

  // truncate the description
  const truncateDescription = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="header__banner"
      style={{
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundImage: `url("${baseImageURL}${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.original_name || movie?.title}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My Lists</button>
        </div>
        <h1 className="banner__description">
          {truncateDescription(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__bottom-fade" />
    </header>
  );
};

export default Banner;
