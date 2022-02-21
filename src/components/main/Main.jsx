import React from 'react';

import styled from 'styled-components';

const MainContainer = styled.main`
  margin: 0 auto;
  maxwidth: '80%';
`;

export default function (props) {
  return <MainContainer {...props}></MainContainer>;
}
