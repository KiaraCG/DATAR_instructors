import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MyCustomPieces from "pages/MyCustomPieces";
import MyClassroomsPage from "pages/MyClassrooms";
import BrowseCustomPiecesPage from "pages/BrowseCustomPieces";

// todo: add rest of routes

const ProjectRoutes = () => {
    let element = useRoutes([
        {path: "/", element: <Home />},
        {path: "*", element: <NotFound />},
        {path:"/mycustompieces", element: <MyCustomPieces />},
        {path:"/myclassrooms", element: <MyClassroomsPage />},
        {path:"/browsecustompieces", element: <BrowseCustomPiecesPage />},
    ]);
    return element;
}

export default ProjectRoutes;