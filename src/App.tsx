import React from 'react';
import { Home } from './Component/Home_page/Home';
import './App.scss';
import { Route, Routes } from 'react-router';
import { Header } from './Component/Header/Header';
import { Footer } from './Component/Footer/Footer';
import { Login } from './Component/Login/LoginUser/Login';
import { Registration } from './Component/Login/Registration/Registration';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Header />
      <div>

       <Registration />
      </div>

            <Routes>
                      <Route>
                          <Route path='Registration' element={<Registration />} />
                          <Route path='Login' element={<Login />} />
                      </Route>
            </Routes>
      </div>
      

      <Footer />

    </div>
  );
}

export default App;