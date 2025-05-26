import React from "react";
import Home from "../components/Home";
import RestOfHome from "../components/RestOfHome";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Home />
      <RestOfHome></RestOfHome>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
