import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";
import Card from "../../SHARED/UIELEMENTS/Card/Card";

export default function UserList(props) {
  if (props.item.length === 0) {
    return (
      <div className="center">
        <Card>
          <h1>No users found</h1>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.item.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            productCount={user.products}
            industry={user.industry}
          />
        );
      })}
    </ul>
  );
}
