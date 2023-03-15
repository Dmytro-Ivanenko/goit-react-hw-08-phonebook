import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

// import AuthLayout from './components/AuthLayout/AuthLayout';
import Navbar from './components/Navbar/Navbar';
import UserRoutes from './UserRoutes';

import { persistor } from './redux/store';
import { getCurrent } from './redux/operations/authOperations';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrent());
	}, []);

	return (
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<Navbar />
				<UserRoutes />
			</BrowserRouter>
		</PersistGate>
	);
}

export default App;
