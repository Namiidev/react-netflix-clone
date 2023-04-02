import { useEffect, useState } from "react";
import React from "react";
import axios from "../axios";
import requests from "../api";
import "./Banner.css";


function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * 20 - 1)]);
      return request;
    }

    fetchData();
  }, []);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substring(0,  n - 1) + "..." : str;
  }
  return (

    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "top",
      }}
    >
      <div className="banner__contents">
        <h2 className="banner__title">{movie?.name}</h2>

        <div >
          <button className="banner__button"> Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h3 className="banner__description">{ truncate(movie?.overview, 145) }</h3>
      </div>
      <div className="banner--fadeButton"></div>
    </header>
  );
}

export default Banner;
