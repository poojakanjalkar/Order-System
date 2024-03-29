import React from "react";
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";

export default function UserProducts() {
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
        "https://rukminim2.flixcart.com/image/832/832/xif0q/gown/i/0/w/na-m-short-sleeve-stitched-gown-femvy-na-original-imag3hyesubkhaxw.jpeg?q=70&crop=true",
      title: "women gown",
      description:
        "Crafted from a high-quality fabric, the top offers a comfortable and breathable fit, ensuring you stay at ease throughout the day.",
      price: "1299 rs",
      creator: "u2",
    },
  ];

  const userId = useParams().userId;
  console.log("******user id ***", userId);
  const loadedProducts = item.filter((product) => product.creator === userId);
  return <ProductList item={loadedProducts} />;
}
