import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import {
  AdditionalText,
  ErrorPrompt,
  FormContainer,
  LoginContainer,
  LoginForm,
  StyledButton,
  StyledInput,
} from "./styledComponents/ContainerStyled";
import { UnderLinedLink } from "../../utilWrapper/UtilWrapper";

import {
  comparePassword,
  loadUsersList,
  updateCurrentUser,
} from "../../commons/helperFuncs/helperFuncs";

export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function formSubmitHandler(event) {
    event.preventDefault();
    const users = loadUsersList();
    const foundUser = users.find(
      user =>
        userName === user.username && comparePassword(password, user.password)
    );
    if (!foundUser) {
      setError(true);
    } else {
      setError(false);
      updateCurrentUser(foundUser.username);
      setRedirect(true);
    }
  }

  return (
    <>
      <LoginContainer>
        <FormContainer>
          <LoginForm onSubmit={formSubmitHandler}>
            <StyledInput
              type="text"
              name="username"
              placeholder="Your username"
              autoComplete="off"
              onChange={e => setUserName(e.target.value)}
            />
            <StyledInput
              type="password"
              name="password"
              placeholder="Your password"
              autoComplete="off"
              onChange={e => setPassword(e.target.value)}
            />
            <StyledButton type="submit">LOG IN</StyledButton>
          </LoginForm>
          <AdditionalText>
            Not register?&nbsp;
            <UnderLinedLink to="/signup" color="green" hover_color="green">
              Create an account.
            </UnderLinedLink>
          </AdditionalText>
          {error && (
            <ErrorPrompt>User name or password is not correct</ErrorPrompt>
          )}
        </FormContainer>
        {redirect === true && <Navigate to="/home" />}
      </LoginContainer>
    </>
  );
}
