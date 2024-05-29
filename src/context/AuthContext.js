import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: false
  });

  useEffect(() => {
    if (auth.token) {
      axios.defaults.headers.common['x-auth-token'] = auth.token;
      axios.get('/api/auth/user')
        .then(res => {
          setAuth({
            ...auth,
            user: res.data,
            isAuthenticated: true
          });
        })
        .catch(err => {
          localStorage.removeItem('token');
          setAuth({
            token: null,
            user: null,
            isAuthenticated: false
          });
        });
    }
  }, [auth.token]);

  const login = (token) => {
    localStorage.setItem('token', token);
    setAuth({
      ...auth,
      token: token,
      isAuthenticated: true
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({
      token: null,
      user: null,
      isAuthenticated: false
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
