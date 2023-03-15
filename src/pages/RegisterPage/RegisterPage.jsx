import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
import { getIsUserLogin } from '../../redux/selectors';

const RegisterPage = () => {
	const isLogin = useSelector(getIsUserLogin);

	if (isLogin) {
		return <Navigate to="/contacts" />;
	}

	return (
		<div className="container">
			<h1 className="page-title">Register page</h1>
			<RegisterForm />
		</div>
	);
};

export default RegisterPage;
