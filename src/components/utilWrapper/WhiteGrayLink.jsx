import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';

const WhiteGrayLink = styled(StyledLink)`
	color: white;

	&:hover {
		color: #a0a0a0;
	}
`;

export default props => <WhiteGrayLink {...props} />;
