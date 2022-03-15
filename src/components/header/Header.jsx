import React from 'react';

import {
  LoginContainer,
  HeaderContainer,
  LogoContainer,
  NavigationContainer,
  TitleContainer,
  HeaderTitle,
} from './styledComponents/HeaderStyles';
import { ImageContainer } from '../utilWrapper/UtilWrapper';
import logo from '../../images/logo.png';

import NavLinks from './subComponents/NavLinks';
import LoginStatus from './subComponents/LoginStatus';
import { Link } from 'react-router-dom';

import { appTitle } from '../../constant/strings';

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/home">
          <ImageContainer src={logo} alt="phuflix icon"></ImageContainer>
        </Link>
      </LogoContainer>
      <NavigationContainer>
        <NavLinks />
      </NavigationContainer>
      <TitleContainer>
        <HeaderTitle>{appTitle}</HeaderTitle>
      </TitleContainer>
      <LoginContainer>
        <LoginStatus />
      </LoginContainer>
    </HeaderContainer>
  );
}
