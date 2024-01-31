import React from "react";
import "./ProductItem.css";
import Card from "../../SHARED/UIELEMENTS/Card/Card";
import Button from "../../SHARED/FORMELEMENTS/Button";

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
          <Button inverse>Buy Now</Button>
          <Button to={`/products/${props.id}`}>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </Card>
    </li>
  );
}
