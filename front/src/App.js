import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Header from "./component/parts/header";
import Register from "./component/auth/register";
import Login from "./component/auth/login";
import Detail from "./component/houses/detail";
import Home from "./component/pages/home";
import Reservation from "./component/user/reservation";
import Profil from "./component/user/profil";
import {UserConsumer, UserProvider} from "./context/context";
import './firebase'
import Error404 from "./component/pages/error404";

function App() {
    return (
        <div className="App">
            <UserProvider>
                <UserConsumer children={({isAuth}) => (
                    <div>
                        <BrowserRouter>
                            <Header/>
                            <Routes>
                                <Route path="/register" element={<Register/>}/>
                                <Route path="/login" element={<Login/>}/>
                                {isAuth && <Route path="/profil" element={<Profil/>}/>}
                                <Route path="/detail/:id" element={<Detail/>}/>
                                <Route path="/reservation" element={<Reservation/>}/>
                                <Route path="/" element={<Home/>}/>
                                <Route path="*" element={<Error404/>}/>
                            </Routes>
                        </BrowserRouter>
                    </div>
                )}/>
            </UserProvider>
            <ToastContainer/>
        </div>
    );
}

export default App;
