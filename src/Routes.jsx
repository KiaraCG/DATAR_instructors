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

const ProjectRoutes = () => {


    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        { path: "/mycustompieces", element: <PrivateRoute> <MyCustomPieces /> </PrivateRoute>},
        { path: "/myclassrooms", element: <PrivateRoute> <MyClassroomsPage /> </PrivateRoute> },
        { path: "/browsecustompieces", element: <PrivateRoute>  <BrowseCustomPiecesPage/> </PrivateRoute>},
        { path: "/newpiece", element: <PrivateRoute>  <AddNewPiece /> </PrivateRoute> },
        { path: "/login", element: <LoginPage /> },
        { path: "/newclassroom", element: <PrivateRoute> <NewClassroom /> </PrivateRoute>},
        { path: "/piece", element: <PrivateRoute> <Piece /> </PrivateRoute>},
    ]);

    return element;
}

export default ProjectRoutes;

