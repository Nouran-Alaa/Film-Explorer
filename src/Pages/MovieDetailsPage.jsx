import React from "react";
import { useParams } from "react-router";
import MovieDetails from "../components/MovieDetails";

const MovieDetailsPage = () => {
  let { id } = useParams();
  return (
    <>
      <MovieDetails movieId={id}></MovieDetails>
    </>
  );
};

export default MovieDetailsPage;
