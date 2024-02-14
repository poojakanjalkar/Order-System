import React from "react";
import "./NewProduct.css";
import Input from "../../SHARED/FORMELEMENTS/Input";
import Button from "../../SHARED/FORMELEMENTS/Button";
import useForm from "../../SHARED/hooks/form-hooks";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  validate,
} from "../../SHARED/util/validators";

export default function NewProduct() {
  const [formState, inputHandler] = useForm(
    {
      //custom form hook
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const productSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); //send this to backend
  };

  return (
    <form className="product-form" onSubmit={productSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter valid Title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="price"
        element="textarea"
        label="Price"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter price"
        onInput={inputHandler}
        rows={2}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PRODUCT
      </Button>
    </form>
  );
}
