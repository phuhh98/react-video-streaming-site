import React from 'react';
import { NavItem } from 'reactstrap';

import { HeaderContainer, Navigation } from './styledComponents/ContainerStyle';
import {
  ImageContainer,
  NoUnderLinedLink,
  WhiteGrayLink,
} from '../utilWrapper/UtilWrapper';
import logo from '../../images/logo.png';
import { HeaderTitle } from './styledComponents/TextStyle';

export default function Header(props) {
  return (
    <HeaderContainer>
      <NoUnderLinedLink
        to="/home"
        style={{ gridColumn: '1/2', gridRow: '1/3' }}
      >
        <ImageContainer src={logo} width="120px"></ImageContainer>
      </NoUnderLinedLink>
      <Navigation pills>
        <NavItem>
          <WhiteGrayLink to="/home">Home page</WhiteGrayLink>
        </NavItem>
        <NavItem>
          <WhiteGrayLink to="/about">About us</WhiteGrayLink>
        </NavItem>
        <NavItem>
          <WhiteGrayLink to="/contact">Contact</WhiteGrayLink>
        </NavItem>
      </Navigation>
      <HeaderTitle>React video streaming project</HeaderTitle>
    </HeaderContainer>
  );
}
