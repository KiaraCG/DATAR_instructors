import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

// todo: add rest of routes

const ProjectRoutes = () => {
    let element = useRoutes([
        {path: "/", element: <Home />},
        {path: "*", element: <NotFound />},
    ]);
    return element;
}

export default ProjectRoutes;