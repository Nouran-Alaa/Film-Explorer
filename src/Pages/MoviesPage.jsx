import React from "react";
import Movies from "../Components/Movies";
import { useLoaderData } from "react-router";

const MoviesPage = () => {
  let movieData = useLoaderData();
  return (
    <>
      <Movies movieData={movieData}></Movies>
    </>
  );
};

export default MoviesPage;
