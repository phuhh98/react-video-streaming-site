import React from 'react';

export default function Footer(props) {
	return (
		<footer>
			<hr></hr>
			<section
				title="Footer detail"
				style={{ margin: '0 auto', maxWidth: '80%' }}
			>
				Footer detail for the app
			</section>
			{props.children}
		</footer>
	);
}
