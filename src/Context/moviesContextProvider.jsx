import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

// 1. Create Context
export let moviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  // 2. Shared Data
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7`
      )
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Can't fetch the movies");
      });
  }, []);

  // let addNewUserFun = (uData) => {
  //   if (counter === 2) {
  //     setDisabled(true);
  //   }
  //   console.log(uData);
  //   setUserData([...userData, { ...uData, id: uuid(), age: +uData.age }]);

  //   setCounter((old) => old + 1);
  // };

  // 4. Function to get movie by ID
  const getMovieById = (id) => {
    return movies.find((movie) => String(movie.id) === String(id));
  };

  // 5. Function to add a new movie
  const addNewMovie = (newMovieData) => {
    setMovies((prevMovies) => [...prevMovies, newMovieData]);
    console.log(movies);
  };

  return (
    <>
      {/* 3. Provied Context and extract Data */}

      <moviesContext.Provider
        value={{ movies, loading, getMovieById, addNewMovie }}>
        {children}
      </moviesContext.Provider>
    </>
  );
};

export default MoviesContextProvider;
