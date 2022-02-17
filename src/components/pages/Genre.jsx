import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Button } from 'reactstrap';

import AppContext from '../contexts/AppContext';
import FilmList from '../commons/filmList/FilmList';
import GenreDropDown from '../commons/genreDropDown/GenreDropDown';
import StyledLink from '../utilWrapper/StyledLink';
import PrevNextButton from '../commons/prevNextButtons/PrevNextButtons';

import { genreFilter } from '../helperFuncs/dataFilter';

export default React.memo(function HomePage() {
	const { filmData, setFilmData, genreList } = useContext(AppContext);
	const [pageData, setPageData] = useState([]);
	const [queryPage, setQueryPage] = useState(0);
	const [reupdate, setReupdate] = useState(false);
	const pathname = useLocation().pathname;
	const params = useParams();
	const [pageNumber, setPageNumber] = useState(
		Number.isInteger(parseInt(params.pageNumber))
			? parseInt(params.pageNumber)
			: 0
	);
	const ItemPerPage = 20;
	//Fetch data to filmData
	useEffect(() => {
		let tempQueryPage = queryPage;
		const ItemPerQuery = 250;
		let tempFilmData = !!filmData.length ? filmData : [];
		tempFilmData = genreFilter(tempFilmData, params.genre);

		if (!!tempFilmData.length) {
			if ((pageNumber + 1) * ItemPerPage >= tempFilmData.length) {
				tempQueryPage++;
				setQueryPage(tempQueryPage);
			}
		}

		if ((pageNumber + 1) * ItemPerPage <= tempFilmData.length && !!pageNumber) {
			const startItemIndex = 0 + ItemPerPage * pageNumber;
			setPageData(filmData.slice(startItemIndex, startItemIndex + ItemPerPage));
			return;
		}

		fetch(`https://api.tvmaze.com/shows?page=${tempQueryPage}`)
			.then(response => response.json())
			.then(data => {
				if (queryPage === 0) {
					!tempFilmData.length &&
						tempFilmData.push(...data) &&
						setFilmData(tempFilmData);
				} else if ((pageNumber + 1) * ItemPerPage >= tempFilmData.length) {
					let filteredFilms = genreFilter(data, params.genre);
					tempFilmData.push(...filteredFilms);
					if ((pageNumber + 1) * ItemPerPage >= tempFilmData.length) {
						setFilmData(tempFilmData);
						setReupdate(true);
					}
				}
				console.log('fetched');
				const startItemIndex = 0 + ItemPerPage * pageNumber;
				const displayItems = tempFilmData.slice(
					startItemIndex,
					startItemIndex + ItemPerPage
				);
				setPageData(displayItems);
				setReupdate(true);
			});
	}, [pageNumber, params.genre, params.pageNumber, reupdate]);
	//
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
							itemPerPage={ItemPerPage}
							filmDataLength={filmData.length}
						></PrevNextButton>
					</Container>
				</Container>

				<FilmList filmList={pageData} />
			</Container>
		</>
	);
});
