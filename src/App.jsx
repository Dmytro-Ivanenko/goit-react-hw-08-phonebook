import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import Navbar from './components/Navbar/Navbar';
import UserRoutes from './UserRoutes';
import theme from './srevices/theme.js';

import { getCurrent } from './redux/operations/authOperations';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrent());
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<UserRoutes />
		</ThemeProvider>
	);
}

export default App;
