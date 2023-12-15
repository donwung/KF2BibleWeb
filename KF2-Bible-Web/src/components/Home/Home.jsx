import React from "react";
import { Link } from "react-router-dom";
import "../../styles/reset.scss";
import "../../styles/home.scss";
const Home = () => {
  return (
    <div className="banner">
      <h2>KF2 Bible Web Project</h2>
      <p>A fan project developed by Der & Voodoo Doll</p>
      <Link to="/calculator">Start Here</Link>
    </div>
  );
};

export default Home;
