import React, { useContext, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Button } from 'reactstrap';

import AppContext from '../contexts/AppContext';
import FilmList from '../commons/filmList/FilmList';
import GenreDropDown from '../commons/genreDropDown/GenreDropDown';
import StyledLink from '../utilWrapper/StyledLink';
import PrevNextButton from '../commons/prevNextButtons/PrevNextButtons';

import { genreFilter } from '../helperFuncs/dataFilter';
import { useFetchFilmData } from '../customHooks/useFetchData';

export default React.memo(function HomePage() {
	const { filmData, setFilmData, genreList } = useContext(AppContext);
	const [pageData, setPageData] = useState([]);
	const pathname = useLocation().pathname;
	const params = useParams();
	const [pageNumber, setPageNumber] = useState(
		Number.isInteger(parseInt(params.pageNumber))
			? parseInt(params.pageNumber)
			: 0
	);

	//Fetch data to filmData
	useFetchFilmData(
		filmData,
		setFilmData,
		pageData,
		setPageData,
		pageNumber,
		setPageNumber,
		pathname,
		params
	);

	// useEffect(() => {
	// 	if (pathname === '/home') {
	// 		setPageNumber(0);
	// 	}
	// }, [pathname]);
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
							path=""
						></PrevNextButton>
					</Container>
				</Container>

				<FilmList filmList={pageData} />
			</Container>
		</>
	);
});
