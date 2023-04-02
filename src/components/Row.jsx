//Rows includes the title and the container for movie rows
import { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import Youtube from 'react-youtube'
import movieTrailer from "movie-trailer";
const baseurl = "https://image.tmdb.org/t/p/original/"; //for the images


function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  
  const opts = {
    height: "390",
    width: "100%",
    payerVars: {
      autoplay: 1,
    }
  };

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    }
    else {
      movieTrailer( movie?.title || '')
      .then(url => {
        try {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'))
        } catch (err) {
          console.log(err) 
        }
      }).catch((error) => console.log(error))
    }
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={ () => handleClick(movie)}
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            ></img>
          );
        })}
      </div>
       { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} ></Youtube>}
    </div>
  );
}

export default Row;
