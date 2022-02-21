import { Link } from 'react-router-dom';

import styled from 'styled-components';

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
`;

export const WhiteGrayLink = styled(NoUnderLinedLink)`
  color: white;
  &:hover {
    color: #a0a0a0;
  }
`;
