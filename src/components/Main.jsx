import React from 'react';

export default function Main(props) {
	const styleOption = {
		margin: '0 auto',
		maxWidth: '80%'
	};
	return <main style={styleOption}>{props.children}</main>;
}
