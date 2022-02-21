export const firstLetterUpperCase = function (_string) {
  let temp = _string.toString().toLowerCase();
  temp = temp.slice(0, 1).toUpperCase() + temp.slice(1);
  return temp;
};

export const genreFilter = function (data, { genre }) {
  if (!!genre) {
    return data.filter(item =>
      item.genres.includes(firstLetterUpperCase(genre))
    );
  }
  return data;
};
