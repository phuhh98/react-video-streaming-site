import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Button } from 'reactstrap';

import AppContext from '../contexts/AppContext';
import FilmList from '../commons/filmList/FilmList';
import GenreDropDown from '../commons/genreDropDown/GenreDropDown';
import StyledLink from '../utilWrapper/StyledLink';
import PrevNextButton from '../commons/prevNextButtons/PrevNextButtons';

export default React.memo(function HomePage() {
	const { filmData, setFilmData, genreList } = useContext(AppContext);
	const [pageData, setPageData] = useState([]);
	const params = useParams();
	const [pageNumber, setPageNumber] = useState(
		Number.isInteger(parseInt(params.pageNumber))
			? parseInt(params.pageNumber)
			: 0
	);
	const ItemPerPage = 20;
	const pathname = useLocation().pathname;
	//Fetch data to filmData
	useEffect(() => {
		let queryPage = 0;
		const ItemPerQuery = 250;
		let tempFilmData = !!filmData.length ? filmData : [];

		if ((pageNumber + 1) * ItemPerPage <= tempFilmData.length && !!pageNumber) {
			const startItemIndex = 0 + ItemPerPage * pageNumber;
			setPageData(filmData.slice(startItemIndex, startItemIndex + ItemPerPage));
			return;
		}
		if (!!tempFilmData.length) {
			while ((pageNumber + 1) * ItemPerPage >= (queryPage + 1) * ItemPerQuery) {
				queryPage++;
			}
			if (pageNumber === 0) {
				tempFilmData = [];
			}
		}

		fetch(`https://api.tvmaze.com/shows?page=${queryPage}`)
			.then(response => response.json())
			.then(data => {
				if (queryPage === 0) {
					!tempFilmData.length &&
						tempFilmData.push(...data) &&
						setFilmData(tempFilmData);
				} else if ((pageNumber + 1) * ItemPerPage >= tempFilmData.length) {
					tempFilmData.push(...data);
					setFilmData(tempFilmData);
				}
				const startItemIndex = 0 + ItemPerPage * pageNumber;
				const displayItems = tempFilmData.slice(
					startItemIndex,
					startItemIndex + ItemPerPage
				);
				setPageData(displayItems);
			});
	}, [pageNumber, params.pageNumber]);

	//reset pageNumber to 0 when ever hit the Homepage link
	useEffect(() => {
		if (pathname === '/home') {
			setPageNumber(0);
		}
	}, [pathname]);
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
						<GenreDropDown genreList={genreList}></GenreDropDown>
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
						<PrevNextButton
							setPageNumber={setPageNumber}
							pageNumber={pageNumber}
							path="home"
						></PrevNextButton>
					</Container>
				</Container>

				<FilmList filmList={pageData} />
			</Container>
		</>
	);
});
