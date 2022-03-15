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

export const loadUsersList = function () {
  let temp = JSON.parse(localStorage.getItem('users'));
  return !temp ? [] : temp;
};
export const updateUserList = function (userList) {
  localStorage.setItem('users', JSON.stringify(userList));
};

export const updateCurrentUser = function (username) {
  localStorage.setItem(
    'loginStatus',
    JSON.stringify({ status: true, currentUser: username })
  );
};

export const addNewUser = function (username, password) {
  let users = loadUsersList();
  users.push({ username: username, password: generatePassword(password) });
  localStorage.setItem('users', JSON.stringify(users));
};

export const loadLoginStatus = function () {
  let temp = JSON.parse(localStorage.getItem('loginStatus'));
  return !!temp ? temp : {};
};

export const sortAToZ = function (array) {
  let tempArr = array.slice();
  return tempArr.sort((a, b) => (a > b ? 1 : -1));
};
