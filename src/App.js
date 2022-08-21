import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import Products from './components/pages/Products';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/menu' exact element={<Menu />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/sign-in' exact element={<SignIn />} />
          <Route path='/sign-up' exact element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;