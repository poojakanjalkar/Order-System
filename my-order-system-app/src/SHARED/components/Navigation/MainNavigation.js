import React, { useEffect, useState } from "react";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../../UIELEMENTS/Bckdrop/Backdrop";

export default function MainNavigation(props) {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  useEffect(() => {
    console.log("here changed", isSideDrawerOpen);
  }, [isSideDrawerOpen]);

  const openDrawer = (e) => {
    setIsSideDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsSideDrawerOpen(false);
  };
  return (
    <React.Fragment>
      {isSideDrawerOpen && <Backdrop onClick={closeDrawer} />}
      {isSideDrawerOpen && (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks></NavLinks>
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={(e) => {
            openDrawer(e);
          }}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Products</Link>
        </h1>

        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}
