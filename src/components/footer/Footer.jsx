import React from 'react';
import { ImageContainer } from '../utilWrapper/UtilWrapper';
import {
  Contact,
  FooterContainer,
  FooterContent,
  LogoContainer,
  StyledALink,
} from './styledComponents/FooterStyles';

import epamLogo from '../../images/EPAM_LOGO_WhiteAndBlue.png';
import { epamURL, authorEmail } from '../../constant/strings';

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <LogoContainer>
            <a href={epamURL} rel="noreferrer" target="_blank">
              <ImageContainer src={epamLogo} alt="epam logo"></ImageContainer>
            </a>
          </LogoContainer>
          <Contact>
            <h4>Author</h4>
            <StyledALink href={`mailto:${authorEmail}`}>
              {authorEmail}
            </StyledALink>
          </Contact>
        </FooterContent>
      </FooterContainer>
    </>
  );
}
