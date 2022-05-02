import React from "react";
import { Link } from "react-router-dom";

const SourPatch = () => {
  return (
    <div>
      <h1>Sour Patch Kids</h1>
      <p>Sour Sugar coated candy</p>
      <p>
        Price: <b>$2.00</b>
      </p>
      <Link to="/">Go Back</Link>
    </div>
  );
};
export default SourPatch;
