import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const {  isAuthenticated, userInfo } = useSelector(store => store.user)
    return  ( isAuthenticated && userInfo) ? <Outlet /> : <Navigate to={'/'} />
}

export default PrivateRoute