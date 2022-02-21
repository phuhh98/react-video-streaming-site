import React from 'react';

import Header from './subComponents/Header';
import Main from './subComponents/Main';
import Footer from './subComponents/Footer';
import { Outlet } from 'react-router-dom';

export default function CommonLayout(props) {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
