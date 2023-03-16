import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsUserLogin } from '../../../redux/selectors';
import styles from './NavBarPages.module.scss';

const NavBarPages = () => {
	const isLogin = useSelector(getIsUserLogin);

	return (
		<div className={styles.NavBarPages}>
			<NavLink className={styles.navLink} to="/">
				Home
			</NavLink>

			{isLogin ? (
				<NavLink className={styles.navLink} to="/contacts">
					Contacts
				</NavLink>
			) : (
				<>
					<NavLink className={styles.navLink} to="/register">
						Register
					</NavLink>

					<NavLink className={styles.navLink} to="/login">
						Login
					</NavLink>
				</>
			)}
		</div>
	);
};

export default NavBarPages;
