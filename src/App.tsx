import React from 'react';
import './App.scss';
import { Header } from './Component/Header/Header';
import { Footer } from './Component/Footer/Footer';
import { Registration } from './Component/Login/Registration/Registration';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
       <Registration />
      </div>
      <Footer />
    </div>
  );
}

export default App;