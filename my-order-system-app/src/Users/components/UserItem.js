import React from "react";
import "./UserItem.css";
import { Link } from "react-router-dom";
import Card from "../../SHARED/UIELEMENTS/Card/Card";
import Avatar from "../../SHARED/UIELEMENTS/Avatar/Avatar";

export default function UserItem(props) {
  return (
    <Card className="user-item__content">
      <li className="user-item">
        <div className="user-item__content">
          <Link to={`${props.id}/products`}>
            <div className="user-item__image">
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className="user-iem__info">
              <h2>{props.name}</h2>
              <h3>{props.industry}</h3>
              <h3>
                {props.productCount}{" "}
                {props.productCount === 1 ? "Product" : "Products"}
              </h3>
            </div>
          </Link>
        </div>
      </li>
    </Card>
  );
}
