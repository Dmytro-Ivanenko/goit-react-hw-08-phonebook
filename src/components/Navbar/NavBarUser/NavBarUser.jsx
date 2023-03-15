import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/operations/authOperations';

import { getUser } from '../../../redux/selectors';

import styles from './NavBarUser.module.scss';

const NavbarUser = () => {
	const { email } = useSelector(getUser);
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(logout());
	};

	return (
		<div className={styles.navBarUser}>
			<p className={styles.email}>{email}</p>
			<button onClick={onLogout}>Logout</button>
		</div>
	);
};

export default NavbarUser;
