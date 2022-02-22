import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 10vw 80vw 10vw;
  grid-template-rows: auto 100px auto;
  background-color: #393939;
  box-shadow: 0 3px 5px 5px #d3d3d3;
  margin: 0 auto;
  color: #fff;
`;

export const LogoContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/4;

  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.25;
    pointer-events: none;
    visibility: visible;
    cursor: pointer;
    animation: flyout 0.3s ease forwards;
  }
  &:hover::before {
    visibility: visible;
    cursor: pointer;

    animation: flyin 0.3s ease forwards;
  }
  @keyframes flyin {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    }
  }
  @keyframes flyout {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }
`;

export const NavigationContainer = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  margin: 0 auto;
  align-self: center;
  width: 50%;
  & > * {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TitleContainer = styled.div`
  grid-column: 2/3;
  grid-row: 2/4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const LoginContainer = styled.div`
  grid-column: 3/4;
  grid-row: 1/4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
