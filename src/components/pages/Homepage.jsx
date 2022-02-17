import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Button } from 'reactstrap';

import AppContext from '../contexts/AppContext';
import FilmList from '../commons/filmList/FilmList';
import GenreDropDown from '../commons/genreDropDown/GenreDropDown';
import StyledLink from '../utilWrapper/StyledLink';
export default React.memo(function HomePage() {
	const [filmData, setFilmData] = useContext(AppContext);
	const [pageData, setPageData] = useState([]);

	const params = useParams();
	const [pageNumber, setPageNumber] = useState(
		Number.isInteger(parseInt(params.pageNumber))
			? parseInt(params.pageNumber)
			: 0
	);
	const ItemPerPage = 20;
	//Fetch data to filmData < Context
	useEffect(() => {
		fetch('https://api.tvmaze.com/shows')
			.then(response => response.json())
			.then(data => {
				setFilmData(data);
				const startItem = 0 + ItemPerPage * pageNumber;

				setPageData(data.slice(startItem, startItem + ItemPerPage));
			});
	}, [pageNumber]);

	return (
		<>
			<Container
				style={{
					marginTop: '20px'
				}}
			>
				<Container
					style={{
						margin: '10px auto',
						display: 'flex',
						justifyContent: 'space-between'
					}}
				>
					<Container title="menu-left group">
						<GenreDropDown
							genreList={['comedy', 'action', 'horror', 'thriller']}
						></GenreDropDown>
						<Button color="danger" style={{ marginLeft: '10px' }}>
							<StyledLink to="/liked" style={{ color: 'white' }}>
								Liked
							</StyledLink>
						</Button>
						<Button color="danger" style={{ marginLeft: '10px' }}>
							<StyledLink to="/favorite" style={{ color: 'white' }}>
								Favorite
							</StyledLink>
						</Button>
					</Container>
					<Container
						title="menu-right group"
						style={{ display: 'flex', justifyContent: 'flex-end' }}
					>
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
								(pageNumber + 1) * ItemPerPage > filmData.length
									? pageNumber
									: pageNumber + 1
							}`}
							style={{ color: 'white' }}
							onClick={() => {
								(pageNumber + 1) * ItemPerPage >= filmData.length
									? setPageNumber(pageNumber)
									: setPageNumber(pageNumber + 1);
							}}
						>
							{' '}
							<Button color="primary" style={{ marginLeft: '10px' }}>
								Next
							</Button>
						</StyledLink>
					</Container>
				</Container>

				<FilmList filmList={pageData} />
			</Container>
		</>
	);
});
