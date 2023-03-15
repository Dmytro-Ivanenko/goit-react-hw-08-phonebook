import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/operations/authOperations';

const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (data, { resetForm }) => {
		dispatch(login(data));
		resetForm();
	};

	return (
		<div>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={handleSubmit}
			>
				<Form>
					<label htmlFor="email">Email</label>
					<Field
						id="email"
						name="email"
						placeholder="jane@acme.com"
						type="email"
						required
					/>

					<label htmlFor="password">Name</label>
					<Field
						id="password"
						name="password"
						placeholder="Password"
						type="password"
						required
					/>

					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</div>
	);
};

export default LoginForm;
