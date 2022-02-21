export const firstLetterUpperCase = function (_string) {
  return _string
    .toString()
    .toLowerCase()
    .split(/[ -_]/)
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join('-');
};

export const genreFilter = function (data, { genre }) {
  if (!!genre) {
    return data.filter(item =>
      item.genres.includes(firstLetterUpperCase(genre))
    );
  }
  return data;
};
