import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './home/home';
import Search from './search/search'
import Navigation from "./navigation/navigation";

function App() {
  return (
      <>
          <div className="container mt-4 mb-4">
              <h1 className="text-center">ShoeScan</h1>
              <h4 className="text-center">Buy and sell sneakers</h4>
              <hr/>
              <BrowserRouter>
                  <Navigation/>
                  <hr className="mb-4"/>
                  <Routes>
                      <Route index element={<Home/>}/>
                      <Route path="/search" element={<Search/>}/>
                  </Routes>
              </BrowserRouter>
          </div>
      </>
  );
}

export default App;
