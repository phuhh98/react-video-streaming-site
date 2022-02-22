import bcrypt from 'bcryptjs';

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

export const generatePassword = function (_passwordString) {
  const SALT_ROUND = 10;
  var salt = bcrypt.genSaltSync(SALT_ROUND);
  var hash = bcrypt.hashSync(_passwordString, salt);
  return hash;
};

export const comparePassword = function (_passwordString, hash) {
  return bcrypt.compareSync(_passwordString, hash);
};

export const setCurrentUser = function (_username) {
  localStorage.setItem(
    'loginStatus',
    JSON.stringify({ status: true, currentUser: _username })
  );
};
