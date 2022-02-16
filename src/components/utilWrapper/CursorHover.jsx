import React from 'react';
import styledComponents from 'styled-components';

const CursorHover = styledComponents.div`
	&:hover{
		cursor: pointer
	}
`;

export default props => <CursorHover {...props} />;
