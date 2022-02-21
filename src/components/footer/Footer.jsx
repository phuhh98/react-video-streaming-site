import React from 'react';
import { Container } from 'reactstrap';

export default function Footer(props) {
	return (
		<footer>
			<hr></hr>
			<Container
				title="Footer detail"
				style={{ margin: '0 auto', maxWidth: '80%' }}
			>
				Footer detail for the app
			</Container>
			{props.children}
		</footer>
	);
}
