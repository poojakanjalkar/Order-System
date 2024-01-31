import React from "react";
import "./ProductItem.css";
import Card from "../../SHARED/UIELEMENTS/Card/Card";

export default function ProductItem(props) {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h1>{props.title}</h1>
          <h1>{props.description}</h1>
          <h1>{props.price}</h1>
        </div>
        <div className="place-item__actions">
          <button>Buy Now</button>
        </div>
      </Card>
    </li>
  );
}
