import React from 'react';
import { NavLink } from 'react-router-dom';

// import styles from './navbar-auth.module.scss';

const NavbarAuth = () => {
	return (
		<div>
			<NavLink to="/register">Register</NavLink> |
			<NavLink to="/login">Login</NavLink>
		</div>
	);
};

export default NavbarAuth;
