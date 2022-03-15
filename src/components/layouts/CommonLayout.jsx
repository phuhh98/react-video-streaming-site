import React from 'react';

import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

export default function CommonLayout() {
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
