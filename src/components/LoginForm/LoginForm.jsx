import React from 'react';
import { Formik, Field, Form } from 'formik';

const RegisterForm = () => (
	<div>
		<h1>Sign Up</h1>
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
		>
			<Form>
				<label htmlFor="email">Email</label>
				<Field
					id="email"
					name="email"
					placeholder="jane@acme.com"
					type="email"
				/>

				<label htmlFor="password">Name</label>
				<Field
					id="password"
					name="password"
					placeholder="Password"
					type="password"
				/>

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	</div>
);

export default RegisterForm;
