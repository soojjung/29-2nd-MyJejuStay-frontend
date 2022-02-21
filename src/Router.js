import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import DetailPageHeader from './pages/DetailPage/DetailPageHeader/DetailPageHeader';
import DetailPageInfo from './pages/DetailPage/DetailPageInfo/DetailPageInfo';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<DetailPageHeader />} />
        <Route path="/accommodations/:id" element={<DetailPageInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
