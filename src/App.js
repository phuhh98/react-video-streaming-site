import { useState } from 'react';
import AppRouter from './components/routers/AppRouter';
import AppContext from './components/commons/contexts/AppContext';

function App() {
  const [filmData, setFilmData] = useState([]);

  let loginStatus = localStorage.getItem('loginStatus') === true ? true : false;
  const app = {
    filmData,
    setFilmData,
    loginStatus,
    likedShowIds: [],
    favoriteShowIds: [],
    genreList: [
      'adventure',
      'comedy',
      'action',
      'horror',
      'thriller',
      'science-fiction',
      'crime',
      'drama',
      'mystery',
      'anime',
    ].sort((a, b) => (a > b ? 1 : -1)),
  };
  return (
    <div className="App">
      <AppContext.Provider value={app}>
        <AppRouter />
      </AppContext.Provider>
    </div>
  );
}

export default App;
