import React from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact activeClassName="active">
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/products" exact activeClassName="active">
          MY PRODUCTS
        </NavLink>
      </li>
      <li>
        <NavLink to="/products/new" exact activeClassName="active">
          ADD PRODUCT
        </NavLink>
      </li>
      <li>
        <NavLink to="/authenticate" exact activeClassName="active">
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
}
