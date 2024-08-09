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

// todo: add rest of routes

const ProjectRoutes = () => {
    let element = useRoutes([
        {path: "/", element: <Home />},
        {path: "*", element: <NotFound />},
        {path:"/mycustompieces", element: <MyCustomPieces />},
        {path:"/myclassrooms", element: <MyClassroomsPage />},
        {path:"/browsecustompieces", element: <BrowseCustomPiecesPage />},
        {path:"/newpiece", element: <AddNewPiece />},
        {path:"/login", element: <LoginPage />},
        {path:"/newclassroom", element: <NewClassroom />},
        {path:"/piece", element: <Piece />},
    ]);
    return element;
}

export default ProjectRoutes;