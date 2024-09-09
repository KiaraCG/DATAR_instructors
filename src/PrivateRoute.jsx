import React from 'react';
import { Navigate } from 'react-router-dom';

// TODO: add private layer

const PrivateRoute = ({ children }) => {

    if (localStorage.getItem('user') === null) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
