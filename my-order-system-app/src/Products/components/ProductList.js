import React from "react";
import Card from "../../SHARED/UIELEMENTS/Card/Card";
import ProductItem from "./ProductItem";
import "./ProductList.css";

export default function ProductList(props) {
  if (props.item.length == 0) {
    return (
      <Card>
        <div>
          <h1> No Products Found, create atleast one</h1>
        </div>
        <button>Share Product</button>
      </Card>
    );
  }
  return (
    <ul>
      {props.item.map((products) => (
        <ProductItem
          key={props.id}
          image={props.image}
          title={props.title}
          price={props.price}
          url={props.url}
        />
      ))}
    </ul>
  );
}
