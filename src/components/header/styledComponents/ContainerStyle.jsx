import styled from 'styled-components';

import { Nav, NavItem } from 'reactstrap';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 120px auto;
  grid-template-rows: auto auto;
  background-color: #393939;
  box-shadow: 0 3px 5px 5px #d3d3d3;
  margin: 0 auto;
  color: #fff;
`;

export const Navigation = styled(Nav)`
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  padding-right: 10%;
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
