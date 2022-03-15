import React from 'react';
import styled from 'styled-components';
import {
  MainContent,
  SocialMediaContacts,
} from './styledComponents/ContainerStyled';
import { StyledALink } from './styledComponents/ContainerStyled';
import { CursorHover } from '../../utilWrapper/UtilWrapper';

import facebookIcon from '../../../images/facebook-f-brands.svg';
import linkedinIcon from '../../../images/linkedin-in-brands.svg';
import { authorEmail, authorEmail2 } from '../../../constant/strings';

const MainContentStyled = styled(MainContent)`
  margin-bottom: 216px;
`;

export default function Contact() {
  return (
    <>
      <MainContentStyled>
        <br />
        <h2>Contact me</h2>
        <p>Hoai Phu Huynh, EPAM System Vietnam</p>
        <br />
        <h3>Email</h3>
        <p>
          <ul>
            <li>
              <strong>
                <StyledALink href={`mailto:${authorEmail}`}>
                  {authorEmail}
                </StyledALink>
              </strong>
            </li>
            <li>
              <strong>
                <StyledALink href={`mailto:${authorEmail2}`}>
                  {authorEmail2}
                </StyledALink>
              </strong>
            </li>
          </ul>
        </p>

        <br />
        <h3>Social media</h3>
        <SocialMediaContacts>
          <StyledALink
            href="https://www.facebook.com/phuhh98/"
            target="_blank"
            norefferer
          >
            <CursorHover>
              <img src={facebookIcon} height="45" alt="facebook icon" />
            </CursorHover>
          </StyledALink>
          <StyledALink
            href="https://www.linkedin.com/in/hhp-meobeo/"
            target="_blank"
            norefferer
          >
            <CursorHover>
              <img
                src={linkedinIcon}
                alt="linkedin icon"
                height="50"
                style={{ marginBottom: '-5px' }}
              />
            </CursorHover>
          </StyledALink>
        </SocialMediaContacts>
      </MainContentStyled>
    </>
  );
}
