import firstLetterUpperCase from './firstLetterUpperCase';

export function genreFilter(data, genre) {
	return data.filter(item => item.genres.includes(firstLetterUpperCase(genre)));
}
