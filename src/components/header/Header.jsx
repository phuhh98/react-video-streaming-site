import React from 'react';

import {
  LoginContainer,
  HeaderContainer,
  LogoContainer,
  NavigationContainer,
} from './styledComponents/ContainerStyle';
import { ImageContainer } from '../utilWrapper/UtilWrapper';
import logo from '../../images/logo.png';
import { HeaderTitle } from './styledComponents/TextStyle';
import { TitleContainer } from './styledComponents/ContainerStyle';

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
