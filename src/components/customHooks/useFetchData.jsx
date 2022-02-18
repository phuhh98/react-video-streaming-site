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
	genreFilter = noFilter
) {
	//api paging
	const [queryPage, setQueryPage] = useState(0);

	const [reupdate, setReupdate] = useState(false);

	//item per view page
	const ItemPerPage = 20;
	const watcher = [pageNumber, params.genre, params.pageNumber, reupdate];
	// console.log(params);
	useEffect(() => {
		let tempQueryPage = queryPage;
		let tempFilmData = !!filmData.length ? filmData : [];
		tempFilmData = genreFilter(tempFilmData, params.genre ? params.genre : '');
		console.log('filter for: ', params.genre);

		if (!!tempFilmData.length) {
			if ((pageNumber + 1) * ItemPerPage >= tempFilmData.length) {
				tempQueryPage++;
				setQueryPage(tempQueryPage);
				return;
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
				console.log(tempFilmData);
				const startItemIndex = 0 + ItemPerPage * pageNumber;
				const displayItems = tempFilmData.slice(
					startItemIndex,
					startItemIndex + ItemPerPage
				);
				setPageData(displayItems);
				setReupdate(true);
			});
	}, [...watcher]);

	useEffect(() => {
		if (pathname === '/home') {
			setPageNumber(0);
		}
	}, [pathname]);
}

function noFilter(arr) {
	return arr;
}
