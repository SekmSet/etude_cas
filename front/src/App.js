import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Header from "./component/parts/header";
import Register from "./component/auth/register";
import Login from "./component/auth/login";
import Home from "./component/pages/home";
import Reservation from "./component/user/reservation";
import Profil from "./component/user/profil";
import Error404 from "./component/pages/error404";

import {UserConsumer, UserProvider} from "./context/context";
import './firebase'
import ListRooms from "./component/rooms/list";
import DetailRoom from "./component/rooms/detail";
import DetailHouse from "./component/houses/detail";
import ListHouses from "./component/houses/list";
import SearchRooms from "./component/rooms/search";

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
                                <Route path="/appartements/:id" element={<DetailHouse/>}/>
                                <Route path="/chambres/search" element={<SearchRooms/>}/>
                                <Route path="/chambres/:id" element={<DetailRoom/>}/>
                                <Route path="/appartements" element={<ListHouses/>}/>
                                <Route path="/chambres" element={<ListRooms/>}/>
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
