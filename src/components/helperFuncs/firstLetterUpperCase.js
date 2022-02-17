export default function firstLetterUpperCase(_string) {
	let temp = _string.toString().toLowerCase();
	temp = temp.slice(0, 1).toUpperCase() + temp.slice(1);
	return temp;
}
