import { useState } from 'react';
import AppRouter from './components/routers/AppRouter';
import AppContext from './components/commons/contexts/AppContext';
import {
  loadLoginStatus,
  sortAToZ,
} from './components/commons/helperFuncs/helperFuncs';

import { genres } from './constant/values';

function App() {
  const [filmData, setFilmData] = useState([]);
  let loginStatus = !!loadLoginStatus().status;
  const app = {
    filmData,
    setFilmData,
    loginStatus,
    genreList: sortAToZ(genres),
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
