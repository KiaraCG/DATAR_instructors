import React, {createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Load user from localStorage or perform an API call to validate user
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            // console.log("Success ..." + storedUser);
            setUser(storedUser);
            // console.log('User loaded from localStorage:', storedUser);
        }
       else {
            console.log("Failed ...");
            // navigate('/login'); // Redirect to login if not authenticated
        }
    }, [navigate]);

    const login = async (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); // Persist login
        // console.log('User stored in localStorage:', userData);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
// export default AuthProvider;

// export const useAuth = () => {
//     return useContext(AuthContext);
// };