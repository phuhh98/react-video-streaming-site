import { useState, useEffect } from 'react';

export function useFetchFilmData(
	filmData,
	setFilmData,
	pageData,
	setPageData,
	pageNumber,
	setPageNumber,
	pathname,
	params,
	filter = noFilter
) {
	//api paging
	const [queryPage, setQueryPage] = useState(0);
	const [reupdate, setReupdate] = useState(false);
	const [oldGenre, setOldGenre] = useState(params.genre);
	//item per view page
	const ItemPerPage = 20;

	useEffect(() => {
		//current api query page
		let tempQueryPage = queryPage;
		let tempFilmData = !!filmData.length ? filmData : [];

		tempFilmData = filter(tempFilmData, params);

		//cleart tempFilmData when genre changed
		if (params.genre !== oldGenre) {
			tempFilmData = [];
			setOldGenre(params.genre);
		}

		console.log('queryPage: ', queryPage);

		//if current item list is enough => trigger render
		if ((pageNumber + 1) * ItemPerPage <= tempFilmData.length && !!pageNumber) {
			const startItemIndex = 0 + ItemPerPage * pageNumber;
			setPageData(filmData.slice(startItemIndex, startItemIndex + ItemPerPage));
			return;
		}

		fetch(`https://api.tvmaze.com/shows?page=${tempQueryPage}`)
			.then(response => response.json())
			.then(data => {
				let filteredFilms = filter(data, params);

				//on zero page => reset tempFilmData
				if (
					(!params.pageNumber || parseInt(params.pageNumber) === 0) &&
					queryPage === 0
				) {
					console.log('reset temp');
					tempFilmData = [];
					tempFilmData.push(...filteredFilms);
				} else {
					//Filter duplicated item on api call -- oh my god!! what an API
					filteredFilms = filteredFilms.reduce((acc, filteredItem) => {
						if (
							tempFilmData.find(item => {
								if (item.id === filteredItem.id) {
									return true;
								}
							})
						) {
							return acc;
						}
						acc.push(filteredItem);
						return acc;
					}, []);
					console.log(filteredFilms);
					tempFilmData.push(...filteredFilms);
				}
				setFilmData(tempFilmData);

				if ((pageNumber + 1) * ItemPerPage >= tempFilmData.length) {
					setReupdate(!reupdate);
					return;
				}

				const startItemIndex = 0 + ItemPerPage * pageNumber;
				const displayItems = tempFilmData.slice(
					startItemIndex,
					startItemIndex + ItemPerPage
				);
				setPageData(displayItems);
			});
		//if current items list is not enough => increase queryPage on api
		if (!!tempFilmData.length) {
			if ((pageNumber + 1) * ItemPerPage >= tempFilmData.length) {
				tempQueryPage++;
				setQueryPage(tempQueryPage);
			}
		}
	}, [pageNumber, params.genre, params.pageNumber, reupdate]);

	//reset page to zero on navigate to home
	useEffect(() => {
		if (pathname === '/home') {
			setPageNumber(0);
		}
	}, [pathname]);

	//reset queryPage and pageNumber when change genre filter
	useEffect(() => {
		setQueryPage(0);
		setPageNumber(0);
	}, [params.genre]);
}

function noFilter(arr) {
	return arr;
}
