import React, { useCallback, useReducer } from "react";
import "./NewProduct.css";
import Input from "../../SHARED/FORMELEMENTS/Input";
import Button from "../../SHARED/FORMELEMENTS/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  validate,
} from "../../SHARED/util/validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT-CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    default:
      return state;
  }
};

export default function NewProduct() {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
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
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT-CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  console.log("check valid----", !formReducer.isValid);

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
