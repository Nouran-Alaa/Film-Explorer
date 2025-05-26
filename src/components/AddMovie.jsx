import React, { useContext, useState } from "react";
import { moviesContext } from "../Context/moviesContextProvider";
import { v4 as uuid } from "uuid";

const AddMovie = () => {
  const { addNewMovie } = useContext(moviesContext);
  const [newMovie, setNewMovie] = useState({
    title: "",
    release_date: "",
    vote_average: "",
    poster_path: "",
    overview: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovieID = {
      ...newMovie,
      id: uuid(),
      vote_average: parseFloat(newMovie.vote_average),
    };
    addNewMovie(newMovieID);
    setNewMovie({
      title: "",
      release_date: "",
      vote_average: "",
      poster_path: "",
      overview: "",
    });
  };

  return (
    <section className="register-section bg-netflix overflow-auto">
      <div
        className="container my-5 p-4 rounded shadow-lg bg-dark text-light overflow-hidden"
        style={{ maxWidth: "700px" }}>
        <h2 className="text-center mb-4">Add a New Movie</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Movie Title</label>
            <input
              type="text"
              className="form-control"
              value={newMovie.title}
              onChange={(e) =>
                setNewMovie({ ...newMovie, title: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Release Date</label>
            <input
              type="date"
              className="form-control"
              value={newMovie.release_date}
              onChange={(e) =>
                setNewMovie({ ...newMovie, release_date: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Vote Average</label>
            <input
              type="text"
              className="form-control"
              value={newMovie.vote_average}
              onChange={(e) =>
                setNewMovie({ ...newMovie, vote_average: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Poster Image URL</label>
            <input
              type="text"
              className="form-control"
              value={newMovie.poster_path}
              onChange={(e) =>
                setNewMovie({ ...newMovie, poster_path: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Overview</label>
            <textarea
              className="form-control"
              rows="4"
              value={newMovie.overview}
              onChange={(e) =>
                setNewMovie({ ...newMovie, overview: e.target.value })
              }
              required></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-danger w-100 fw-bold btn-lg my-3">
            Add Movie
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddMovie;
