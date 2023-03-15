import React from 'react';
// import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

// import PublicRoute from './components/PublicRoute/PublicRoute';
// import RestrictedRoute from './components/PrivateRoute/PrivateRoute';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import Layout from './components/AuthLayout/Layout';

// import useAuth from './hooks/useAuth';
// import { getCurrent } from './redux/operations/authOperations';

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
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/contacts" element={<ContactsPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	);
	// const dispatch = useDispatch();
	// const { isRefreshing } = useAuth();

	// useEffect(() => {
	// 	dispatch(getCurrent());
	// }, [dispatch]);

	// return isRefreshing ? (
	// 	<b>Refreshing user...</b>
	// ) : (
	// <Routes>
	// 	<Route path="/" element={<Layout />}>
	// 		<Route index element={<HomePage />} />
	// 		<Route
	// 			path="/register"
	// 			element={
	// 				<RestrictedRoute
	// 					redirectTo="/contacts"
	// 					component={<RegisterPage />}
	// 				/>
	// 			}
	// 		/>
	// 		<Route
	// 			path="/login"
	// 			element={
	// 				<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
	// 			}
	// 		/>
	// 		<Route
	// 			path="/contacts"
	// 			element={
	// 				<PrivateRoute redirectTo="/login" component={<ContactsPage />} />
	// 			}
	// 		/>
	// 		<Route path="*" element={<NotFoundPage />} />
	// 	</Route>
	// </Routes>);
};

export default UserRoutes;
