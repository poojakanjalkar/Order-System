import React from "react";
import ProductList from "../components/ProductList";

export default function UserProducts() {
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
      id: "1",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/top/3/5/c/xs-blousetop-red-liza-fashion-original-imagwsfzz6qqbhat.jpeg?q=70&crop=true",
      title: "women red top",
      description:
        "Crafted from a high-quality fabric, the top offers a comfortable and breathable fit, ensuring you stay at ease throughout the day.",
      price: "299 rs",
      creator: "u2",
    },
  ];
  return <ProductList item={item} />;
}
