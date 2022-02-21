import React from 'react';
import { useLocation } from 'react-router-dom';

import { Button } from 'reactstrap';

import { NoUnderLinedLink } from '../utilWrapper/UtilWrapper';

export default function PrevNextButton(props) {
  const pageNumber = props.pageNumber;
  const setPageNumber = props.setPageNumber;
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
        <Button color="primary" style={{ marginLeft: '10px' }}>
          Previous
        </Button>
      </NoUnderLinedLink>

      <NoUnderLinedLink
        to={`${path + '/'}${pageNumber + 1}`}
        style={{ color: 'white' }}
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        {' '}
        <Button color="primary" style={{ marginLeft: '10px' }}>
          Next
        </Button>
      </NoUnderLinedLink>
    </>
  );
}
