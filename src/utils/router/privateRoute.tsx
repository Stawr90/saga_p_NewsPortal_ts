import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    return (
        localStorage.getItem('isAuthenticated') ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoute;