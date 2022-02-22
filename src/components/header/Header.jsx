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

export default function Header(props) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/home">
          <ImageContainer src={logo}></ImageContainer>
        </Link>
      </LogoContainer>
      <NavigationContainer>
        <NavLinks />
      </NavigationContainer>
      <TitleContainer>
        <HeaderTitle>React video streaming project</HeaderTitle>
      </TitleContainer>
      <LoginContainer>
        <LoginStatus />
      </LoginContainer>
    </HeaderContainer>
  );
}
