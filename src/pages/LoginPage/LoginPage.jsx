import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/operations/authOperations';

import RegisterForm from '../../components/RegisterForm/RegisterForm';

const LoginPage = () => {
	const dispatch = useDispatch();

	const handleLogin = (data) => {
		dispatch(login(data));
	};

	return (
		<div className="container">
			<h1 className="page-title">Login page</h1>
			<RegisterForm onSubmit={handleLogin} />
		</div>
	);
};

export default LoginPage;
