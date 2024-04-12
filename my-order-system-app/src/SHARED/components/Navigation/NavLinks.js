import React, { useContext } from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../FORMELEMENTS/context/auth-context";

export default function NavLinks() {
  const auth = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact activeClassName="active">
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/products" exact activeClassName="active">
            MY PRODUCTS
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/products/new" exact activeClassName="active">
            ADD PRODUCT
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/authenticate" exact activeClassName="active">
            AUTHENTICATE
          </NavLink>
        </li>
      )}
    </ul>
  );
}
