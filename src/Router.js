import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import DetailPageHeader from './pages/DetailPage/DetailPageHeader/DetailPageHeader';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import App from './pages/KaKao/App';
import Auth from './pages/KaKao/Auth';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/detail" element={<DetailPageHeader />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/app" element={<App />} />
        <Route path="/oauth/kakao/callback" element={<Auth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
