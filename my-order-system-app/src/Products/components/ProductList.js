import React from "react";
import Card from "../../SHARED/UIELEMENTS/Card/Card";
import ProductItem from "./ProductItem";
import "./ProductList.css";
import Button from "../../SHARED/FORMELEMENTS/Button";

export default function ProductList(props) {
  if (props.item.length == 0) {
    return (
      <div className="product-list center">
        <Card>
          <h1>No products found create atleast one</h1>
          <Button to="/products/new">Share Product</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="product-list">
      {props.item.map((products) => (
        <ProductItem
          key={products.id}
          id={products.id}
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
