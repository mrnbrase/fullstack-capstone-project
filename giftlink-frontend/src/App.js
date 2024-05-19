import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove useNavigate
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage'; // Remove LoginPage if not used
import RegisterPage from './components/RegisterPage/RegisterPage'; // Remove RegisterPage if not used
import DetailsPage from './components/DetailsPage/DetailsPage';
import SearchPage from './components/SearchPage/SearchPage';
import Profile from './components/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  // useNavigate can be removed if not used
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/app/product/:productId" element={<DetailsPage/>} />
        <Route path="/app/profile" element={<Profile/>} />
        <Route path="/app/search" element={<SearchPage/>} />
        <Route path="/" element={<MainPage />} />
        <Route path="/app" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
