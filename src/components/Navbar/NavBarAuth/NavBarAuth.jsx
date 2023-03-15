import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavBarAuth.module.scss';

const NavbarAuth = () => {
	return (
		<div className={styles.navBarAuth}>
			<NavLink className={styles.navLink} to="/register">
				Register
			</NavLink>{' '}
			|
			<NavLink className={styles.navLink} to="/login">
				Login
			</NavLink>{' '}
			|
			<NavLink className={styles.navLink} to="/contacts">
				Contacts
			</NavLink>
		</div>
	);
};

export default NavbarAuth;
