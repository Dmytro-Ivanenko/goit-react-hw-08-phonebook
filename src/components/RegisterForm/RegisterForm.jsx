import React from 'react';
import { Formik, Field, Form } from 'formik';

const RegisterForm = () => (
	<div>
		<h1>Sign Up</h1>
		<Formik
			initialValues={{
				name: '',
				email: '',
				password: '',
			}}
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
