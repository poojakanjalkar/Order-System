import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../SHARED/FORMELEMENTS/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../SHARED/util/validators";
import useForm from "../../SHARED/hooks/form-hooks";
import Button from "../../SHARED/FORMELEMENTS/Button";
import "./NewProduct.css";

const item = [
  {
    id: "p1",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/top/3/5/c/xs-blousetop-red-liza-fashion-original-imagwsfzz6qqbhat.jpeg?q=70&crop=true",
    title: "women red top",
    description:
      "Crafted from a high-quality fabric, the top offers a comfortable and breathable fit, ensuring you stay at ease throughout the day.",
    price: "299 rs",
    creator: "u1",
  },

  {
    id: "p2",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/top/3/5/c/xs-blousetop-red-liza-fashion-original-imagwsfzz6qqbhat.jpeg?q=70&crop=true",
    title: "women red top",
    description:
      "Crafted from a high-quality fabric, the top offers a comfortable and breathable fit, ensuring you stay at ease throughout the day.",
    price: "1299 rs",
    creator: "u2",
  },
];

export default function UpdateProduct() {
  const productId = useParams().productId;

  console.log("-----product id is ---", productId, useParams());
  const identifiedProduct = item.find((p) => p.id === productId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedProduct.title,
        isValid: true,
      },
      description: {
        value: identifiedProduct.description,
        isValid: true,
      },
      price: {
        value: identifiedProduct.price,
        isValid: true,
      },
    },
    true
  );

  if (!identifiedProduct) {
    return (
      <div className="center">
        <h1>Product not found</h1>
      </div>
    );
  }

  const updateHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="product-form" onSubmit={updateHandler}>
      <Input
        id="title"
        element="input"
        label="Title"
        type="text"
        value={formState.inputs.title.value}
        valid={formState.inputs.title.isValid}
        validators={[VALIDATOR_REQUIRE]}
        errorText="please enter valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        value={formState.inputs.description.value}
        valid={formState.inputs.description.isValid}
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter valid description."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Price"
        value={formState.inputs.price.value}
        valid={formState.inputs.price.isValid}
        validators={[VALIDATOR_REQUIRE]}
        rows={2}
        errorText="please enter price."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PRODUCT
      </Button>
    </form>
  );
}
