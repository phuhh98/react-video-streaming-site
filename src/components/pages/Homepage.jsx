import React, { useContext, useEffect, useState } from 'react';
import {
	Container,
	Row,
	Col,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

import AppContext from '../contexts/AppContext';
import FilmList from '../filmList/FilmList';
import StyledLink from '../utilWrapper/StyledLink';
export default React.memo(function HomePage() {
	const [filmData, setFilmData] = useContext(AppContext);
	const [pageData, setPageData] = useState([]);
	useEffect(() => {
		console.log('FilmData in context printed from homepage \n', filmData);
		fetch('https://api.tvmaze.com/shows')
			.then(response => response.json())
			.then(data => {
				setFilmData(data);
				setPageData(data.slice(0, 99));
			});
	}, []);
	return (
		<>
			<Container>
				<UncontrolledDropdown>
					<DropdownToggle caret color="secondary">
						Genre
					</DropdownToggle>
					<DropdownMenu container="body">
						<StyledLink to="/search?q=comedy">
							<DropdownItem onClick={function noRefCheck() {}}>
								Comedy
							</DropdownItem>
						</StyledLink>
						<StyledLink to="/search?q=action">
							<DropdownItem onClick={function noRefCheck() {}}>
								Action
							</DropdownItem>
						</StyledLink>
						<StyledLink to="/search?q=thriller">
							<DropdownItem onClick={function noRefCheck() {}}>
								Thriller
							</DropdownItem>
						</StyledLink>
						<StyledLink to="/search?q=horror">
							<DropdownItem onClick={function noRefCheck() {}}>
								Horror
							</DropdownItem>
						</StyledLink>
					</DropdownMenu>
				</UncontrolledDropdown>
				<FilmList filmList={pageData} />
			</Container>
		</>
	);
});
