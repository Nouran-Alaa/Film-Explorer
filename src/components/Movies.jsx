import { useState, useContext } from "react";
import MovieCard from "./movieCard";
import { moviesContext } from "../Context/moviesContextProvider";

const MovieList = () => {
  const { movies, loading } = useContext(moviesContext);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 9;

  // Get current page movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container p-5 mx-auto">
      <h1 className="text-center my-5">Movies List</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="row g-5">
            {currentMovies.map((movie) => (
              <MovieCard key={movie.id} movieID={movie.id} />
            ))}
          </div>

          {/* Pagination controls */}
          <div className="d-flex justify-content-center align-items-center mt-5 gap-3">
            <button
              className="btn btn-outline-light"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}>
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`btn ${
                  currentPage === index + 1
                    ? "btn-danger"
                    : "btn-outline-secondary"
                }`}>
                {index + 1}
              </button>
            ))}

            <button
              className="btn btn-outline-light"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieList;
