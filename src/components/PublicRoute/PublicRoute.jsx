import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from '../../redux/selectors';

const PublicRoute = () => {
	const { isLogin, token } = useSelector(getAuth);

	if (!isLogin && token) {
		return <p>...Loading</p>;
	}

	if (isLogin) {
		return <Navigate to="contacts" />;
	}

	return <Outlet />;
};

export default PublicRoute;
