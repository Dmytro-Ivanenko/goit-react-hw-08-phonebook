import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import { getIsUserLogin } from '../../redux/selectors';

const LoginPage = () => {
	const isLogin = useSelector(getIsUserLogin);

	if (isLogin) {
		return <Navigate to="/contacts" />;
	}
	return (
		<div className="container">
			<h1 className="page-title">Login page</h1>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
