import React from "react";
import {
  MainContent,
  SocialMediaContacts,
} from "./styledComponents/ContainerStyled";
import { StyledALink } from "./styledComponents/ContainerStyled";
import { CursorHover } from "../../utilWrapper/UtilWrapper";

import facebookIcon from "../../../images/facebook-f-brands.svg";
import linkedinIcon from "../../../images/linkedin-in-brands.svg";
export default function () {
  return (
    <>
      <MainContent>
        <br />
        <h2>Contact me</h2>
        <p>Hoai Phu Huynh, EPAM System Vietnam</p>
        <br />
        <h3>Email</h3>
        <p>
          <ul>
            <li>
              <strong>
                <StyledALink href="mailto:phu_huynh@epam.com">
                  phu_huynh@epam.com
                </StyledALink>
              </strong>
            </li>
            <li>
              <strong>
                <StyledALink href="mailto:phuhh98@gmail.com">
                  phuhh98@gmail.com
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
              <img src={facebookIcon} height="45" />
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
                height="50"
                style={{ marginBottom: "-5px" }}
              />
            </CursorHover>
          </StyledALink>
        </SocialMediaContacts>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </MainContent>
    </>
  );
}
