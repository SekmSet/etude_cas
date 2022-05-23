import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {auth} from '../firebase/index'

const UserContext = React.createContext(undefined);

export const UserProvider = ({ children }) => {
    const [uid, setUid] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    auth.onAuthStateChanged(async (user) => {
        if (user) {
            setUid(user.uid)
            setIsAuth(true);
        } else {
            setUid(null)
            setIsAuth(false)
        }
    })


    const setAuth = ({ uid }) => {
        setUid(uid);
        setIsAuth(true);
    };

    const logout = () => {
        setUid(null);
        setIsAuth(false);
    };

    const data = {
        uid,
        isAuth,
        setAuth,
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