import React from 'react';
// import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
	return (
		<Suspense fallback={<RotatingLines />}>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route element={<PublicRoute />}>
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/login" element={<LoginPage />} />
				</Route>
				<Route element={<PrivateRoute />}>
					<Route path="/contacts" element={<ContactsPage />} />
				</Route>

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	);
};

export default UserRoutes;
