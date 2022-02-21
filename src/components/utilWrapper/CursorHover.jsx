import React from 'react';
import styled from 'styled-components';

const CursorHover = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default props => <CursorHover {...props} />;
