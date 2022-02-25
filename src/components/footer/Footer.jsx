import React from "react";
import { ImageContainer } from "../utilWrapper/UtilWrapper";
import {
  Contact,
  FooterContainer,
  FooterContent,
  LogoContainer,
  StyledALink,
} from "./styledComponents/ContainerStyled";

import epamLogo from "../../images/EPAM_LOGO_WhiteAndBlue.png";

export default function Footer(props) {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <LogoContainer>
            <a href="https://www.epam.com/" rel="noreferrer" target="_blank">
              <ImageContainer src={epamLogo}></ImageContainer>
            </a>
          </LogoContainer>
          <Contact>
            <h4>Author</h4>
            <StyledALink href="mailto:phu_huynh@epam.com">
              phu_huynh@epam.com
            </StyledALink>
          </Contact>
        </FooterContent>
      </FooterContainer>
    </>
  );
}
