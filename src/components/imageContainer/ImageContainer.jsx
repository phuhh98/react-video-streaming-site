import React from 'react';

export default function ImageContainer(props) {
	return (
		<div style={{ width: props.width }}>
			<img
				src={props.src}
				style={{ width: '100%' }}
				alt={props.alt ? props.alt : ''}
			/>
		</div>
	);
}
