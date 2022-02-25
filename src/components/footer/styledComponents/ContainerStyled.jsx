import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  background-color: #393939;
  color: white;
  padding-top: 60px;
  padding-bottom: 60px;
`;
export const FooterContent = styled.div`
  margin: 0 auto;
  width: 70vw;
  display: grid;
  grid-template-columns: 200px 45vw auto;
`;

export const LogoContainer = styled.div`
  grid-column: 1/2;
`;
export const Contact = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledALink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: yellow;
  }
`;
