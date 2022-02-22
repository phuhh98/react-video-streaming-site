import React from 'react';
import { Nav, NavItem } from 'reactstrap';

import { WhiteGrayLink } from '../../utilWrapper/UtilWrapper';

import { NavLinkText } from '../styledComponents/TextStyle';
export default function LoginStatus(props) {
  return (
    <>
      <Nav pills>
        <NavItem>
          <WhiteGrayLink to="/home">
            <NavLinkText>Home page</NavLinkText>
          </WhiteGrayLink>
        </NavItem>
        <NavItem>
          <WhiteGrayLink to="/about">
            <NavLinkText>About the project</NavLinkText>
          </WhiteGrayLink>
        </NavItem>
        <NavItem>
          <WhiteGrayLink to="/contact">
            <NavLinkText>Contact me</NavLinkText>
          </WhiteGrayLink>
        </NavItem>
      </Nav>
    </>
  );
}
