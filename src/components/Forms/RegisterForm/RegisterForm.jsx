import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { signup } from '../../../redux/operations/authOperations';
import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (data, { resetForm }) => {
		dispatch(signup(data));
		resetForm();
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
				<Form className={styles.formContainer}>
					<label className={styles.formLabel} htmlFor="firstName">
						Name
					</label>
					<Field
						className={styles.formInput}
						id="name"
						name="name"
						placeholder="Name"
					/>

					<label className={styles.formLabel} htmlFor="email">
						Email
					</label>
					<Field
						className={styles.formInput}
						id="email"
						name="email"
						placeholder="jane@acme.com"
						type="email"
						required
					/>

					<label className={styles.formLabel} htmlFor="password">
						Password
					</label>
					<Field
						className={styles.formInput}
						id="password"
						name="password"
						placeholder="Password"
						type="password"
						required
					/>

					<Button className={styles.button} type="submit" variant="outlined">
						Submit
					</Button>
				</Form>
			</Formik>
		</div>
	);
};

export default RegisterForm;
