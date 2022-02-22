import styled from 'styled-components';

export const HeaderTitle = styled.h1`
  margin: 0 auto;
`;

export const NavLinkText = styled.p`
  font-size: 1.3rem;
  color: inherit;
  margin: 0;
  padding: 30px;

  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 0 0 0.5rem 0.5rem;
    position: absolute;
    top: -15%;
    left: 0;
    opacity: 0.25;
    pointer-events: none;
    visibility: visible;
    cursor: pointer;
    animation: flyup 0.3s ease forwards;
  }
  &:hover::before {
    visibility: visible;
    cursor: pointer;

    animation: flydown 0.3s ease forwards;
  }
  @keyframes flydown {
    0% {
      top: -100%;
    }
    100% {
      top: 0;
    }
  }
  @keyframes flyup {
    0% {
      top: 0;
    }
    100% {
      top: -100%;
    }
  }
`;

export const ButtonText = styled.span`
  font-size: 1.3rem;
  color: inherit;
`;
