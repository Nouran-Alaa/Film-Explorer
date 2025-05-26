import React from "react";
import { Link } from "react-router";
import { moviesContext } from "../Context/moviesContextProvider";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const MovieCard = ({ movieID }) => {
  let { getMovieById } = useContext(moviesContext);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieDetails = getMovieById(movieID);
    setMovie(movieDetails);
  }, [movieID, getMovieById]);

  if (!movie) {
    return <p>Loading movie details...</p>;
  }

  const { id, title, vote_average, poster_path } = movie;

  return (
    <div className="col-md-4">
      <Link
        to={`/movies/${id}`}
        state={{ movie }}
        className="text-decoration-none">
        <div className="card h-100 rounded hover-card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className="card-img-top"
            alt={title}
            style={{ height: "350px", objectFit: "cover" }}
          />
          <div className="card-body text-center">
            <h3 className="card-title">{title}</h3>
            <p className="text-muted mb-5">⭐ {vote_average.toFixed(1)}/10</p>

            <button className="btn btn-outline-danger px-3 py-2 border-2 fw-medium">
              See More
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
