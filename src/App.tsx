import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scanner from './components/Scanner';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Camera from './components/Camera';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter
        basename='/puzzle-box-app'
      >
        <Header />
        <div className=''>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/scan" element={<Scanner />} />
            <Route path="/camera" element={<Camera />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
