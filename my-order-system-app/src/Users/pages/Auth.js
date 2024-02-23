import React from "react";
import Card from "../../SHARED/UIELEMENTS/Card/Card";
import Input from "../../SHARED/FORMELEMENTS/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MIN } from "../../SHARED/util/validators";
import "./Auth.css";
import Button from "../../SHARED/FORMELEMENTS/Button";

export default function Auth() {
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form>
        <Input
          id="email"
          element="input"
          label="E-mail"
          type="email"
          value=""
          valid=""
          validators={[VALIDATOR_EMAIL]}
          errorText="please enter correct email"
          onInput={() => {}}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          value=""
          valid=""
          validators={[VALIDATOR_MIN(3)]}
          errorText="please enter correct password"
          onInput={() => {}}
        />
        <Button>LOGIN</Button>
      </form>
    </Card>
  );
}
