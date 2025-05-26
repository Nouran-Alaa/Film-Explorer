import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import { lazy, Suspense } from "react";
import "./App.css";

import LayoutPage from "../Pages/layoutPage";
import HomePage from "../Pages/HomePage";
import MoviesPage from "../Pages/MoviesPage";
import MovieDetailsPage from "../Pages/MovieDetailsPage";
import MoviesContextProvider from "../Context/moviesContextProvider";
const AddMoviePage = lazy(() => import("../Pages/AddMoviePage"));
const AboutPage = lazy(() => import("../Pages/AboutPage"));
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import NotFoundPage from "../Pages/NotFoundPage";

function App() {
  let routerConfig = createBrowserRouter([
    {
      path: "",
      element: <LayoutPage></LayoutPage>,
      children: [
        { index: true, element: <HomePage></HomePage> },
        {
          path: "about",
          element: <AboutPage></AboutPage>,
          errorElement: <NotFoundPage></NotFoundPage>,
        },
        {
          path: "movies",
          element: <MoviesPage></MoviesPage>,
        },
        { path: "movies/:id", element: <MovieDetailsPage></MovieDetailsPage> },
        { path: "movies/add", element: <AddMoviePage></AddMoviePage> },
        { path: "login", element: <LoginPage></LoginPage> },
        { path: "register", element: <RegisterPage></RegisterPage> },
        { path: "*", element: <NotFoundPage></NotFoundPage> },
      ],
    },
  ]);

  return (
    <>
      <MoviesContextProvider>
        <RouterProvider router={routerConfig}></RouterProvider>
      </MoviesContextProvider>
    </>
  );
}

export default App;
