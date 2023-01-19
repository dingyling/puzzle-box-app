import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scanner from './components/Scanner';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Camera from './components/Camera';
import Signal from './components/Signal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className=''>
          <Routes>
            <Route path="/" element={"Hei"} />
            <Route path="/scan" element={<Scanner />} />
            <Route path="/camera" element={<Camera />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
