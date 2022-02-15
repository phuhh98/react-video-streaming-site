import React from 'react';

export default function ImageContainer(props) {
	return (
		<div style={{ width: props.width }}>
			<img src={props.imageSource} style={{ width: '100%' }} />
		</div>
	);
}
