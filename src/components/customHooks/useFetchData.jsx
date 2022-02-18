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

	//item per view page
	const ItemPerPage = 20;
	useEffect(() => {
		//current api query page
		let tempQueryPage = queryPage;
		let tempFilmData = !!filmData.length ? filmData : [];

		tempFilmData = filter(tempFilmData, params);

		//if current item list is enough => trigger render
		if ((pageNumber + 1) * ItemPerPage <= tempFilmData.length && !!pageNumber) {
			const startItemIndex = 0 + ItemPerPage * pageNumber;
			setPageData(filmData.slice(startItemIndex, startItemIndex + ItemPerPage));
			return;
		}

		//if current items list is not enough => increase queryPage on api
		if (!!tempFilmData.length) {
			if ((pageNumber + 1) * ItemPerPage >= tempFilmData.length) {
				tempQueryPage++;
				setQueryPage(tempQueryPage);
			}
		}

		fetch(`https://api.tvmaze.com/shows?page=${tempQueryPage}`)
			.then(response => response.json())
			.then(data => {
				let filteredFilms = filter(data, params.genre);

				//on zero page => reset tempFilmData

				if (!params.pageNumber || parseInt(params.pageNumber) === 0) {
					console.log('reset temp');
					tempFilmData = [];
					tempFilmData.push(...filteredFilms);
				} else {
					tempFilmData.push(...filteredFilms);
				}
				setFilmData(tempFilmData);
				console.log(tempFilmData);

				// if ((pageNumber + 1) * ItemPerPage >= tempFilmData.length) {
				// 	setReupdate(!reupdate);
				// }

				console.log('fetched');
				const startItemIndex = 0 + ItemPerPage * pageNumber;
				const displayItems = tempFilmData.slice(
					startItemIndex,
					startItemIndex + ItemPerPage
				);
				setPageData(displayItems);
			});
	}, [pageNumber, params.genre, params.pageNumber, reupdate]);

	useEffect(() => {
		console.log(pathname);
		if (pathname === '/home') {
			setPageNumber(0);
		}
	}, [pathname]);
}

function noFilter(arr) {
	return arr;
}
