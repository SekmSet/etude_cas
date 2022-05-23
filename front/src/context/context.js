import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext(undefined);

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [uid, setUid] = useState(localStorage.getItem('email'));
    const [isAuth, setIsAuth] = useState(token !== null && uid !== null);

    const setAuth = ({ token, uid }) => {
        localStorage.setItem('token', token);
        localStorage.setItem('uid', uid);
        setToken(token);
        setUid(uid);
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        setToken('');
        setUid('');
        setIsAuth(false);
    };

    const data = {
        token,
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