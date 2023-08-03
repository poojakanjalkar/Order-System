import React from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact activeClassName="active">
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/authenticate" exact activeClassName="active">
          Authenticate
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/products" exact activeClassName="active">
          My Products
        </NavLink>
      </li>
    </ul>
  );
}
