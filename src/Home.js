import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <h1>Vending Machine</h1>

      <h3>Hello, Choose a snack!</h3>
      <Link to="/fritos">Fritos</Link>
      <Link to="/sour-patch">Sour Patch</Link>
    </div>
  );
};
export default Home;
