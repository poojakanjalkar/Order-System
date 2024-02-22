import React, { useState } from "react";
import "./ProductItem.css";
import Card from "../../SHARED/UIELEMENTS/Card/Card";
import Button from "../../SHARED/FORMELEMENTS/Button";
import Modal from "../../SHARED/UIELEMENTS/Modal";

export default function ProductItem(props) {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteButton = () => {
    setShowModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowModal(false);
    console.log("deleting....");
  };

  console.log("---***---", props.id);
  return (
    <li className="product-item">
      <Card className="product-item__content">
        <div className="product-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="product-item__info">
          <h1>{props.title}</h1>
          <h1>{props.description}</h1>
          <h1>{props.price}</h1>
        </div>
        <div className="product-item__actions">
          <Button inverse>Buy Now</Button>
          <Button to={`/products/${props.id}`}>Edit</Button>

          <Modal
            show={showModal}
            onCancel={cancelDeleteHandler}
            header="Are you sure?"
            footerClass="product-item__modal-actions"
            footer={
              <React.Fragment>
                <Button inverse onClick={cancelDeleteHandler}>
                  CANCEL
                </Button>
                <Button danger onClick={confirmDeleteHandler}>
                  DELETE
                </Button>
              </React.Fragment>
            }
          >
            <p>
              Do you want to delete this product? Please note that this action
              cannot be undone.
            </p>
          </Modal>
          <Button danger onClick={handleDeleteButton}>
            Delete
          </Button>
        </div>
      </Card>
    </li>
  );
}
