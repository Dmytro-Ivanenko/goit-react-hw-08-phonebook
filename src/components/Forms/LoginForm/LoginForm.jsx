import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { login } from '../../../redux/operations/authOperations';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (data, { resetForm }) => {
		dispatch(login(data));
		resetForm();
	};

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			onSubmit={handleSubmit}
		>
			<Form className={styles.formContainer}>
				<label htmlFor="email" className={styles.formLabel}>
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

				<label htmlFor="password" className={styles.formLabel}>
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
	);
};

export default LoginForm;
