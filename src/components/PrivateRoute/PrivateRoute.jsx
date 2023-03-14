import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from '../../redux/selectors';

const PrivateRoute = () => {
	const { isLogin } = useSelector(getAuth);

	if (isLogin) {
		return <Navigate to="/contacts" />;
	}

	return <Outlet />;
};

export default PrivateRoute;
