import React, { useState } from "react";
import useMovies from "../Hooks/useMovies";
import { Link } from "react-router";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { movies, loading } = useMovies();

  const goTo = (index) => {
    if (movies.length === 0) return;
    if (index < 0) index = movies.length - 1;
    if (index >= movies.length) index = 0;
    setCurrentIndex(index);
  };

  if (loading || movies.length === 0) {
    return <p className="text-center text-light mt-4">Loading movies...</p>;
  }

  const currentMovie = movies[currentIndex];
  const backgroundImage = currentMovie.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`
    : "/fallback.jpg";

  return (
    <>
      <div
        className="py-5 position-relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
        }}>
        {/* Dark overlay to enhance contrast */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: 0 }}
        />

        <button
          className="btn btn-outline-light position-absolute start-0 top-50 translate-middle-y p-3 z-3 ms-2"
          onClick={() => goTo(currentIndex - 1)}>
          ❮
        </button>

        <h1 className="text-light text-center p-3 mt-3 mb-5 z-4 position-relative bg-dark bg-opacity-50 mx-auto w-50">
          Featured Movies
        </h1>

        <div className="d-flex justify-content-between align-items-center gap-5 position-relative z-1 px-5">
          {/* Movie Details */}
          <div className="w-50 ms-4 ">
            <h1 className="mb-3 red-txt">{currentMovie.title}</h1>
            <h5 className="mb-4">{currentMovie.overview}</h5>
            <p className="mb-3">
              <strong className="text-info">Release Date:</strong>{" "}
              {currentMovie.release_date}
            </p>
            <p className="mb-5">
              <strong>⭐</strong> {currentMovie.vote_average.toFixed(1)} / 10
            </p>
            <Link
              to={`/movies/${currentMovie.id}`}
              state={{ movie: currentMovie }}
              className="btn-red">
              See More
            </Link>
          </div>

          {/* Movie Carousel */}
          <div className="d-flex justify-content-end align-items-center gap-3 py-5 mt-5">
            {[...Array(3)].map((_, idx) => {
              const actualIndex =
                (currentIndex - 1 + idx + movies.length) % movies.length;
              const movie = movies[actualIndex];
              const isCenter = idx === 1;

              return (
                <div
                  key={movie.id}
                  className={`text-center ${
                    isCenter ? "" : "opacity-50"
                  } cursor-pointer`}
                  style={{
                    transform: isCenter ? "scale(1.1)" : "scale(0.9)",
                    transition: "all 0.7s ease",
                    cursor: "pointer",
                  }}
                  onClick={() => goTo(actualIndex)}>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : "/fallback.jpg"
                    }
                    alt={movie.title}
                    className="img-fluid rounded shadow"
                    style={{
                      width: isCenter ? "250px" : "180px",
                      filter: isCenter ? "none" : "blur(2px)",
                    }}
                  />
                  {isCenter && (
                    <div className="mt-3">
                      <h5>{movie.title}</h5>
                      <p>⭐ {movie.vote_average.toFixed(1)} / 10</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <button
          className="btn btn-outline-light position-absolute end-0 top-50 translate-middle-y p-3 z-1 me-1"
          onClick={() => goTo(currentIndex + 1)}>
          ❯
        </button>
      </div>
    </>
  );
};

export default Home;
