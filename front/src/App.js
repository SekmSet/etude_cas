import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initializeApp } from 'firebase/app';

import './App.css';
import Header from "./component/parts/header";
import Footer from "./component/parts/footer";
import Register from "./component/auth/register";
import Login from "./component/auth/login";
import Detail from "./component/houses/detail";
import Home from "./component/pages/home";
import Reservation from "./component/user/reservation";
import Profil from "./component/user/profil";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <Header/>
        <BrowserRouter>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
