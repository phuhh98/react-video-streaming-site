import React from 'react';
import { Nav, NavItem } from 'reactstrap';

import {
  ImageContainer,
  NoUnderLinedLink,
  WhiteGrayLink,
} from '../utilWrapper/UtilWrapper';
import logo from '../../images/logo.png';

export default function Header(props) {
  return (
    <header
      className="header"
      style={{
        display: 'grid',
        gridTemplateColumns: '120px auto',
        gridTemplateRows: 'auto auto',
        backgroundColor: '#393939',
        boxShadow: '0 3px 5px 5px #d3d3d3',
        margin: '0 auto',
        color: '#fff',
      }}
    >
      <NoUnderLinedLink
        to="/home"
        style={{ gridColumn: '1/2', gridRow: '1/3' }}
      >
        <ImageContainer src={logo} width="120px"></ImageContainer>
      </NoUnderLinedLink>
      <Nav
        pills
        style={{
          justifyItems: 'center',
          alignItems: 'center',
          margin: '0 auto',
          paddingRight: '10%',
          display: 'flex',
          justifyContent: 'space-between',
          width: '50%',
        }}
      >
        <NavItem>
          <WhiteGrayLink to="/home">Home page</WhiteGrayLink>
        </NavItem>
        <NavItem>
          <WhiteGrayLink to="/about">About us</WhiteGrayLink>
        </NavItem>
        <NavItem>
          <WhiteGrayLink to="/contact">Contact</WhiteGrayLink>
        </NavItem>
      </Nav>
      <h2
        style={{
          margin: '0 auto',
          paddingRight: '10%',
        }}
      >
        React video streaming project
      </h2>
      {props.children}
    </header>
  );
}
