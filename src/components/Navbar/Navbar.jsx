import React from 'react';

import { useSelector } from 'react-redux';
import { getIsUserLogin } from '../../redux/selectors';
import NavBarPages from './NavBarPages/NavBarPages';
import NavBarUser from './NavBarUser/NavBarUser';

import styles from './NavBar.module.scss';

const NavBar = () => {
	return (
		<div className={styles.navBar}>
			<NavBarPages />
			{useSelector(getIsUserLogin) && <NavBarUser />}
		</div>
	);
};

export default NavBar;
