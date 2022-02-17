import React from 'react';

import { Button } from 'reactstrap';

import StyledLink from '../../utilWrapper/StyledLink';

export default function PrevNextButton(props) {
	const pageNumber = props.pageNumber;
	const setPageNumber = props.setPageNumber;
	const ItemPerPage = props.itemPerPage;
	const filmDataLength = props.filmDataLength;

	return (
		<>
			<StyledLink
				to={`/home/${pageNumber - 1 < 0 ? 0 : pageNumber - 1}`}
				style={{ color: 'white' }}
				onClick={() =>
					setPageNumber(() => (pageNumber - 1 < 0 ? 0 : pageNumber - 1))
				}
			>
				<Button color="primary" style={{ marginLeft: '10px' }}>
					Previous
				</Button>
			</StyledLink>

			<StyledLink
				to={`/home/${
					pageNumber + 1
					// (pageNumber + 1) * ItemPerPage > filmDataLength
					// 	? pageNumber
					// 	: pageNumber + 1
				}`}
				style={{ color: 'white' }}
				onClick={() => {
					setPageNumber(pageNumber + 1);
					// (pageNumber + 1) * ItemPerPage >= filmDataLength
					// 	? setPageNumber(pageNumber)
					// 	: setPageNumber(pageNumber + 1);
				}}
			>
				{' '}
				<Button color="primary" style={{ marginLeft: '10px' }}>
					Next
				</Button>
			</StyledLink>
		</>
	);
}
