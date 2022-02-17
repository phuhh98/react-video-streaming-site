import React from 'react';

import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

import StyledLink from '../../utilWrapper/StyledLink';

function firstLetterUppderCase(_string) {
	let temp = _string.toString().toLowerCase();
	temp = temp.slice(0, 1).toUpperCase() + temp.slice(1);
	return temp;
}

export default function GenreDropDown(props) {
	const genreList = props.genreList; // an Array

	return (
		<UncontrolledDropdown style={{ display: 'inline-block' }}>
			<DropdownToggle caret color="secondary">
				Genre
			</DropdownToggle>
			<DropdownMenu container="body">
				{genreList.map(genre => (
					<StyledLink to={`home/${genre}`}>
						<DropdownItem>{firstLetterUppderCase(genre)}</DropdownItem>
					</StyledLink>
				))}
			</DropdownMenu>
		</UncontrolledDropdown>
	);
}
