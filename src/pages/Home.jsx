import React from "react";

import { Link, NavLink } from "react-router-dom";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <MovieList />
    </div>
  );
};

export default Home;
