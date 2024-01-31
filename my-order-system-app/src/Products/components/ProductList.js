import React from "react";
import Card from "../../SHARED/UIELEMENTS/Card/Card";
import ProductItem from "./ProductItem";
import "./ProductList.css";

export default function ProductList(props) {
  if (props.item.length == 0) {
    return (
      <Card>
        <div className="center">
          <h1> No Products Found, create atleast one</h1>
        </div>
        <button>Share Product</button>
      </Card>
    );
  }
  return (
    <ul className="place-list">
      {props.item.map((products) => (
        <ProductItem
          key={products.id}
          image={products.image}
          title={products.title}
          description={products.description}
          price={products.price}
          creatorId={products.creator}
        />
      ))}
    </ul>
  );
}
