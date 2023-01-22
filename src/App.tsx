import React from 'react';
import './App.scss';
import { Header } from './Component/Header/Header';
import { Footer } from './Component/Footer/Footer';
import { Registration } from './Component/Login/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Header />
      <div></div>
      <Footer />
    </div>
  );
}

export default App;