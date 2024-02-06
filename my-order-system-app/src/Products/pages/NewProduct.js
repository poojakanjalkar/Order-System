import React from "react";
import "./NewProduct.css";
import Input from "../../SHARED/FORMELEMENTS/Input";
import { VALIDATOR_REQUIRE } from "../../SHARED/util/validators";

export default function NewProduct() {
  return (
    <form className="product-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter valid Title"
      />
    </form>
  );
}
