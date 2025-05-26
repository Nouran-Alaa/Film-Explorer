import React from "react";
import { useLocation, useNavigate } from "react-router";

const MovieDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { movie } = location.state || {}; // Retrieve passed movie object from state

  if (!movie) {
    return (
      <p className="text-center text-danger mt-4">Movie details not found.</p>
    );
  }

  return (
    <div
      className="text-white py-5 position-relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        minHeight: "100vh",
      }}>
      {/* Dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", zIndex: 0 }}
      />

      <div className="container position-relative z-1 d-flex align-items-center gap-5">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "/fallback.jpg"
          }
          alt={movie.title}
          className="img-fluid rounded shadow"
          style={{ maxWidth: "300px" }}
        />

        <div>
          <h1 className="mb-3">{movie.title}</h1>
          <p className="mb-3">{movie.overview}</p>
          <p>
            <strong className="text-info">Release Date:</strong>{" "}
            {movie.release_date}
          </p>
          <p>
            <strong>⭐</strong> {movie.vote_average.toFixed(1)} / 10
          </p>

          <button
            className="btn btn-outline-light mt-4"
            onClick={() => navigate(-1)}>
            ⬅ Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
