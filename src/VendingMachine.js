import React from "react";
import { BrowserRouter, Link, Route, NavLink } from "react-router-dom";
import Fritos from "./Fritos";
import Home from "./Home";
import SourPatch from "./SourtPatch";
import "./VendingMachine.css";
const VendingMachine = () => {
  return (
    <BrowserRouter>
      <div className="VendingMachine">
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/fritos">
            Fritos
          </NavLink>
          <NavLink exact to="/sour-patch">
            Sour Patch
          </NavLink>
        </nav>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/fritos">
          <Fritos />
        </Route>
        <Route exact path="/sour-patch">
          <SourPatch />
        </Route>
        <p></p>
      </div>
    </BrowserRouter>
  );
};
export default VendingMachine;
