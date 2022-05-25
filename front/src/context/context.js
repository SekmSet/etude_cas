import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {auth} from '../firebase/index'

const UserContext = React.createContext(undefined);

export const UserProvider = ({ children }) => {
    const [uid, setUid] = useState(null);
    const [email, setEmail] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const [city, setCity] = useState(undefined);
    const [date, setDate] = useState(undefined);

    auth.onAuthStateChanged(async (user) => {
        if (user) {
            setUid(user.uid)
            setEmail(user.email)
            setIsAuth(true);
        } else {
            setUid(null)
            setIsAuth(false)
        }
    })


    const setAuth = ({ uid, email }) => {
        setUid(uid);
        setEmail(email)
        setIsAuth(true);
    };

    const logout = () => {
        setUid(null);
        setIsAuth(false);
    };

    const setSearch = ({city, date}) => {
        setCity(city)
        setDate(date)
    }

    const data = {
        uid,
        email,
        isAuth,
        city,
        date,
        setAuth,
        setEmail,
        setSearch,
        logout
    };

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

export const UserConsumer = UserContext.Consumer;
export default UserContext;

UserProvider.propTypes = {
    children: PropTypes.element.isRequired
};