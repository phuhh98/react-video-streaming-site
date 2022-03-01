import React from "react";
import { Enlarge } from "../../../filmCard/styledComponent/styledContainer";
import { ImageContainer } from "../../../utilWrapper/UtilWrapper";
import { CastCardContainer } from "../styledComponents/ContainerStyled";

export default function CastCard({ cast }) {
  return (
    <>
      <Enlarge>
        <CastCardContainer>
          <ImageContainer src={cast.image} height="400" />
          {/* <img src={cast.image} /> */}
          <p>
            <strong>{cast.name}</strong>&nbsp;as&nbsp;
            <strong>
              <em>{cast.role}</em>
            </strong>
          </p>
        </CastCardContainer>
      </Enlarge>
    </>
  );
}
