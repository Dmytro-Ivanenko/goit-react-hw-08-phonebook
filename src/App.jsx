import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import AuthLayout from './components/AuthLayout/AuthLayout';
import Navbar from './components/Navbar/Navbar';
// import UserRoutes from './UserRoutes';

import { persistor } from './redux/store';

import './App.css';

function App() {
	return (
		<PersistGate loading={null} persistor={persistor}>
			<AuthLayout>
				<BrowserRouter>
					<Navbar />
					<UserRoutes />
				</BrowserRouter>
			</AuthLayout>
		</PersistGate>
	);
}

export default App;
