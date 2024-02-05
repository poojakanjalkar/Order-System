import React from "react";
import "./NewProduct.css";
import Input from "../../SHARED/FORMELEMENTS/Input";

export default function NewProduct() {
  return (
    <form className="product-form">
      <Input element="input" type="text" label="Title" />
    </form>
  );
}
