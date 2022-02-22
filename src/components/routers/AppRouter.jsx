import { Routes, Route } from 'react-router-dom';

import CommonLayout from '../layouts/CommonLayout';
import Homepage from '../main/mainContents/Homepage';
import About from '../main/mainContents/About';
import Contact from '../main/mainContents/Contact';
import NotFound from '../main/mainContents/NotFound';
import Genre from '../main/mainContents/Genre';
import Index from '../main/mainContents/Index';
import Login from '../main/mainContents/Login';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Index />} />

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
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
