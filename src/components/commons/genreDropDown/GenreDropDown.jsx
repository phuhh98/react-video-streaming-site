import React from 'react';

import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

import StyledLink from '../../utilWrapper/StyledLink';
import firstLetterUpperCase from '../../helperFuncs/firstLetterUpperCase';

export default function GenreDropDown(props) {
	const genreList = props.genreList; // an Array

	return (
		<UncontrolledDropdown style={{ display: 'inline-block' }}>
			<DropdownToggle caret color="secondary">
				Genre
			</DropdownToggle>
			<DropdownMenu container="body">
				{genreList.map(genre => (
					<StyledLink to={`/genre/${genre}`} key={genre}>
						<DropdownItem>{firstLetterUpperCase(genre)}</DropdownItem>
					</StyledLink>
				))}
			</DropdownMenu>
		</UncontrolledDropdown>
	);
}
