import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../SHARED/FORMELEMENTS/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../SHARED/util/validators";
import Button from "../../SHARED/FORMELEMENTS/Button";

const item = [
  {
    id: "1",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/top/3/5/c/xs-blousetop-red-liza-fashion-original-imagwsfzz6qqbhat.jpeg?q=70&crop=true",
    title: "women red top",
    description:
      "Crafted from a high-quality fabric, the top offers a comfortable and breathable fit, ensuring you stay at ease throughout the day.",
    price: "299 rs",
    creator: "u1",
  },

  {
    id: "2",
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
  const identifiedProduct = item.find((p) => p.id === productId);

  if (!identifiedProduct) {
    return (
      <div className="center">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        label="Title"
        type="text"
        value={identifiedProduct.title}
        valid={true}
        validator={[VALIDATOR_REQUIRE]}
        errorText="please enter valid title."
        onInput={() => {}}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        value={identifiedProduct.description}
        valid={true}
        validator={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter valid description."
        onInput={() => {}}
      />
      <Input
        id="description"
        element="textarea"
        label="Price"
        value={identifiedProduct.price}
        valid={true}
        validator={[VALIDATOR_REQUIRE]}
        rows={2}
        errorText="please enter price."
        onInput={() => {}}
      />
      <Button type="submit" disabled={true}>
        UPDATE PRODUCT
      </Button>
    </form>
  );
}
