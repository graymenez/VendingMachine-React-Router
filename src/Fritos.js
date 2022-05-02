import React from "react";
import { Link } from "react-router-dom";

const Fritos = () => {
  return (
    <div>
      <h1>Fritos</h1>
      <p>Corn Chips</p>
      <p>
        Price: <b>$1.50</b>
      </p>
      <Link to="/">Go Back</Link>
    </div>
  );
};
export default Fritos;
