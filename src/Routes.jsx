import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MyCustomPieces from "pages/MyCustomPieces";
import MyClassroomsPage from "pages/MyClassrooms";
import BrowseCustomPiecesPage from "pages/BrowseCustomPieces";
import AddNewPiece from "pages/NewPiece";
import LoginPage from "pages/Login";
import NewClassroom from "./pages/NewClassroom";
import Piece from "./pages/Piece";

import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './AuthContext';

const ProjectRoutes = (props) => {
    const { user, setUser } = props;

    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        { path: "/mycustompieces", element: <PrivateRoute children={ <MyCustomPieces user={user} />} /> },
        { path: "/myclassrooms", element: <PrivateRoute><MyClassroomsPage /></PrivateRoute> },
        { path: "/browsecustompieces", element:  <BrowseCustomPiecesPage/> },
        { path: "/newpiece", element: <PrivateRoute><AddNewPiece /></PrivateRoute> },
        { path: "/login", element: <LoginPage user={user} setUser={setUser} /> },
        { path: "/newclassroom", element: <PrivateRoute><NewClassroom /></PrivateRoute> },
        { path: "/piece", element: <PrivateRoute><Piece /></PrivateRoute> },
    ]);

    // Wrap the entire route system with AuthProvider
    return <AuthProvider>{element}</AuthProvider>;
}

export default ProjectRoutes;

