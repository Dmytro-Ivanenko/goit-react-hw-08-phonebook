import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

// import AuthLayout from './components/AuthLayout/AuthLayout';
import Navbar from './components/Navbar/Navbar';
import UserRoutes from './UserRoutes';

// import { persistor } from '../redux/store';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<UserRoutes />
		</BrowserRouter>
	);
}

export default App;
