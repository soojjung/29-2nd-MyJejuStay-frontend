import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import DetailPageHeader from './pages/DetailPage/DetailPageHeader/DetailPageHeader';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<DetailPageHeader />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
