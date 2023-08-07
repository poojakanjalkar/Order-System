import React from "react";
import "./SideDrawer.css";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

export default function SideDrawer(props) {
  const content = (
    <CSSTransition in={props.show} timeout={200} mountOnEnter mountOnExit>
      <aside className="side-drawer">{props.children}</aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}
