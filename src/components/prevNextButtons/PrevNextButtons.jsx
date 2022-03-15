import React from 'react';
import { useLocation } from 'react-router-dom';

import { NoUnderLinedLink } from '../utilWrapper/UtilWrapper';
import { ButtonPrimaryStyled } from './styledComponents/PrevNextButtonsStyles';

export default function PrevNextButton({ pageNumber, setPageNumber }) {
  const pathArr = useLocation().pathname.split('/');

  if (pathArr.includes(pageNumber.toString())) {
    pathArr.pop();
  }
  pathArr.join('/');
  const path = pathArr.join('/');

  return (
    <>
      <NoUnderLinedLink
        to={`${path + '/'}${pageNumber - 1 < 0 ? 0 : pageNumber - 1}`}
        style={{ color: 'white' }}
        onClick={() =>
          setPageNumber(() => (pageNumber - 1 < 0 ? 0 : pageNumber - 1))
        }
      >
        <ButtonPrimaryStyled>Previous</ButtonPrimaryStyled>
      </NoUnderLinedLink>

      <NoUnderLinedLink
        to={`${path + '/'}${pageNumber + 1}`}
        style={{ color: 'white' }}
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        <ButtonPrimaryStyled>Next</ButtonPrimaryStyled>
      </NoUnderLinedLink>
    </>
  );
}
