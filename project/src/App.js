import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Home from './home/home';
import Search from './search/search';
import Login from "./users/login";
import Register from "./users/register";
import Users from "./users";
import Profile from "./users/profile";
import Navigation from "./navigation/navigation";
import usersReducer from "./users/users-reducer";
import searchReducer from "./search/search-reducer";
import SearchDetails from "./search/search-details";
import PublicProfile from "./users/public-profile";
import postingsReducer from "./postings/postings-reducer";

const store = configureStore({
    reducer: {
        users: usersReducer,
        shoes: searchReducer,
        postings: postingsReducer,
    }
})

function App() {
  return (
      <div className="container mt-4 mb-4">
          <Provider store={store}>
              <h1 className="text-center">ShoeScan</h1>
              <h4 className="text-center">Buy and sell sneakers</h4>
              <hr/>
              <BrowserRouter>
                  <Navigation/>
                  <hr className="mb-4"/>
                  <Routes>
                      <Route index element={<Home/>}/>
                      <Route path="/search" element={<Search/>}/>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/register" element={<Register/>}/>
                      <Route path="/users" element={<Users/>}/>
                      <Route path="/details/:skuID" element={<SearchDetails/>}/>
                      <Route path="/profile" element={<Profile/>}/>
                      <Route path="/profile/:uid" element={<PublicProfile/>}/>
                  </Routes>
              </BrowserRouter>
          </Provider>
      </div>
  );
}

export default App;
