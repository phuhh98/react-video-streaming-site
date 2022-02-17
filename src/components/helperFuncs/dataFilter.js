import firstLetterUpperCase from './firstLetterUpperCase';

export function GenreFilter(data, genre) {
	console.log('filter', data, genre.toLowerCase);
	return data.filter(item => item.genres.includes(firstLetterUpperCase(genre)));
}
