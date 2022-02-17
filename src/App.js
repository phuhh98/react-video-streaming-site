import { useState } from 'react';
import AppRouter from './components/routers/AppRouter';
import AppContext from './components/contexts/AppContext';

function App() {
	const [filmData, setFilmData] = useState([]);
	const app = {
		filmData,
		setFilmData,
		login: false,
		likedShowIds: [],
		favoriteShowIds: []
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
