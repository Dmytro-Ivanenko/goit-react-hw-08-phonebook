import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

// import PublicRoute from './modules/PublicRoute/PublicRoute';
// import PrivateRoute from './modules/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
	return (
		<Suspense
			fallback={
				<RotatingLines
					strokeColor="grey"
					strokeWidth="5"
					animationDuration="0.75"
					width="96"
					visible={true}
				/>
			}
		>
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
