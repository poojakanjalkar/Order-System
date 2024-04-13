import React, { useContext, useState } from "react";
import Card from "../../SHARED/UIELEMENTS/Card/Card";
import Input from "../../SHARED/FORMELEMENTS/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MIN,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../SHARED/util/validators";
import "./Auth.css";
import Button from "../../SHARED/FORMELEMENTS/Button";
import useForm from "../../SHARED/hooks/form-hooks";
import { AuthContext } from "../../SHARED/FORMELEMENTS/context/auth-context";

export default function Auth() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const auth = useContext(AuthContext);

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
    auth.login();
  };

  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            id="Name"
            element="input"
            label="Name"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="please enter name"
            onInput={inputHandler}
          />
        )}
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
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button type="submit" onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
  );
}
