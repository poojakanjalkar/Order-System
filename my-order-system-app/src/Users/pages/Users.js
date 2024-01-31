import React from "react";
import UserList from "../components/UserList";

export default function Users() {
  const USER = [
    {
      id: "u1",
      name: "Pooja",
      image: "https://teqip.in/wp-content/uploads/2022/12/kajal-agarwal.jpg",
      products: 3,
      industry: "Fashion Retailer",
    },
  ];
  return <UserList item={USER} />;
}
