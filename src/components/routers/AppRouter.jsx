import { Routes, Route } from 'react-router-dom';

import CommonLayout from '../layouts/CommonLayout';
import Homepage from '../pages/Homepage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Genre from '../pages/Genre';

export default function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<CommonLayout />}>
				<Route index element={<Homepage />} />
				<Route path="home" element={<Homepage />}>
					<Route path=":pageNumber" element={<Homepage />} />
				</Route>
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="genre" element={<Genre />}>
					<Route path=":genre" element={<Genre />}>
						<Route path=":pageNumber" element={<Genre />}></Route>
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
