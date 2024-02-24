import React from "react";
import Card from "../../SHARED/UIELEMENTS/Card/Card";
import Input from "../../SHARED/FORMELEMENTS/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MIN,
  VALIDATOR_MINLENGTH,
} from "../../SHARED/util/validators";
import "./Auth.css";
import Button from "../../SHARED/FORMELEMENTS/Button";
import useForm from "../../SHARED/hooks/form-hooks";

export default function Auth() {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          id="email"
          element="input"
          label="E-mail"
          type="email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="please enter correct email"
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(3)]}
          errorText="please enter correct password at least 3 characters"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          LOGIN
        </Button>
      </form>
    </Card>
  );
}
