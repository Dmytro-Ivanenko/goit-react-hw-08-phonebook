import React from 'react';
import NavBarAuth from './NavBarAuth/NavBarAuth';
import NavBarUser from './NavBarUser/NavBarUser';

const NavBar = () => {
	return (
		<>
			<NavBarAuth />
			<NavBarUser />
		</>
	);
};

export default NavBar;
