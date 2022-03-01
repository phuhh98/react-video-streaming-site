import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Enlarge = styled.div`
  &:hover > :first-child {
    transform: scale(1.05);
    transition: width, height 0.3s ease-in-out 2s;
    z-index: 1;
  }
`;
