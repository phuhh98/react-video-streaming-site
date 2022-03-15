import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

export const ImageContainer = styled.img`
  width: 100%;
`;

export const CursorHover = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const NoUnderLinedLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
  }
`;

export const WhiteGrayLink = styled(NoUnderLinedLink)`
  color: white;
  &:hover {
    color: white;
  }
`;

export const UnderLinedLink = styled(Link)`
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
  text-decoration: none;
  &:hover {
    color: inherit;
    ${props =>
      props.hover_color &&
      css`
        color: ${props.hover_color};
      `}
    text-decoration: underline;
  }
`;

export const Enlarge = styled.div`
  &:hover > :first-child {
    transform: scale(1.05);
    transition: width, height 0.3s ease-in-out 2s;
    z-index: 1;
  }
`;
