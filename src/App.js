import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Products from "./components/pages/Products";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<Menu />} />
          <Route path="/posts" exact element={<Products />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
