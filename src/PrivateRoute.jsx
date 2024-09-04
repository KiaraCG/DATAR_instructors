import React, {useContext, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

// TODO: add private layer

const PrivateRoute = ({ children }) => {
    // const { user } = useContext(AuthContext);
    // useEffect(() => {
    //     console.log('PrivateRoute user:', user);
    // }, [user]);
    //
    // if (!user) {
    //     return <Navigate to="/login" />;
    // }

    return children;
};

export default PrivateRoute;
