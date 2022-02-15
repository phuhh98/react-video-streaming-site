import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

function App() {
	return (
		<div className="App">
			<Header />
			<Main>
				<Routes>
					<Route path="/home" element={<Homepage />} />
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Main>
			<Footer></Footer>
		</div>
	);
}

export default App;
