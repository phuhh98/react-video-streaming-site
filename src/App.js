import { useState } from 'react';
import AppRouter from './components/routers/AppRouter';
import AppContext from './components/contexts/AppContext';

function App() {
	const [filmData, setFilmData] = useState({});
	return (
		<div className="App">
			<AppContext.Provider value={[filmData, setFilmData]}>
				<AppRouter />
			</AppContext.Provider>
		</div>
	);
}

export default App;
