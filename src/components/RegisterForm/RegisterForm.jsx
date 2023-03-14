import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/operations/authOperations';

const RegisterForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (data) => {
		dispatch(signup(data));
	};

	return (
		<div>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password: '',
				}}
				onSubmit={handleSubmit}
			>
				<Form>
					<label htmlFor="firstName">Name</label>
					<Field id="name" name="name" placeholder="Name" />

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

export default RegisterForm;
