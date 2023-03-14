import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrent } from '../../redux/operations/authOperations';

const AuthLayout = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrent());
	}, [dispatch]);

	return <>{children}</>;
};

AuthLayout.propTypes = {
	children: PropTypes.node,
};

export default AuthLayout;
