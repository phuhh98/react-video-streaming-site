import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import {
  AdditionalText,
  ErrorPrompt,
  SignupFormContainer,
  SignupContainer,
  SignupForm,
  StyledButton,
  StyledInput,
} from './styledComponents/ContainerStyled';
import { UnderLinedLink } from '../../utilWrapper/UtilWrapper';

import {
  addNewUser,
  loadUsersList,
  updateCurrentUser,
} from '../../commons/helperFuncs/helperFuncs';

export default function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');

  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [redirect, setRedirect] = useState(false);

  function formSubmitHandler(event) {
    event.preventDefault();
    const users = loadUsersList();
    const foundUser = users.find(user => userName === user.username);
    console.log(foundUser);
    if (foundUser) {
      setUserError(true);
      setPasswordError(false);
    } else if (!foundUser && retypedPassword !== password) {
      setUserError(false);
      setPasswordError(true);
    } else {
      setUserError(false);
      setPasswordError(false);

      updateCurrentUser(userName);
      addNewUser(userName, password);

      setRedirect(true);
    }
  }

  return (
    <>
      <SignupContainer>
        <SignupFormContainer>
          <SignupForm onSubmit={formSubmitHandler}>
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
            <StyledInput
              type="password"
              name="password"
              placeholder="Retype your password"
              autoComplete="off"
              onChange={e => setRetypedPassword(e.target.value)}
            />
            <StyledButton type="submit">CREATE AN ACCOUNT</StyledButton>
          </SignupForm>
          <AdditionalText>
            Already have an account?&nbsp;
            <UnderLinedLink to="/login" color="green" hover_color="green">
              Login.
            </UnderLinedLink>
          </AdditionalText>
          {userError && <ErrorPrompt>Username is already existed</ErrorPrompt>}
          {passwordError && <ErrorPrompt>Password did not match</ErrorPrompt>}
        </SignupFormContainer>
        {redirect === true && <Navigate to="/home" />}
      </SignupContainer>
    </>
  );
}
