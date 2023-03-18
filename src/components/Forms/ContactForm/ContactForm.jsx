import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../../redux/selectors';
import { postContacts } from '../../../redux/operations/contactsOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Button from '@mui/material/Button';
import styles from './contactForm.module.scss';

const ContactForm = () => {
	const contacts = useSelector(getContacts);
	const dispatch = useDispatch();

	// Submit
	const handleSubmitForm = (values, { resetForm }) => {
		const { name: inpName, number: inpNumber } = values;

		// name check
		if (
			contacts?.find(({ name }) => name.toLowerCase() === inpName.toLowerCase())
		) {
			Notify.warning(`${inpName} is already in contacts.`);
			return;
		}

		// add new contact into database
		dispatch(
			postContacts({
				name: inpName,
				number: inpNumber,
			})
		);
		resetForm();
	};

	return (
		<Formik
			initialValues={{
				name: '',
				number: '',
			}}
			onSubmit={handleSubmitForm}
		>
			<Form className={styles.form}>
				<label className={styles.label} htmlFor="name">
					Name
				</label>
				<Field
					className={styles.input}
					id="name"
					type="text"
					name="name"
					required
				/>

				<label className={styles.label} htmlFor="number">
					Number
				</label>
				<Field
					className={styles.input}
					id="number"
					type="tel"
					name="number"
					required
				/>

				<Button type="submit" className={styles.button} variant="outlined">
					Add contact
				</Button>
			</Form>
		</Formik>
	);
};

export default ContactForm;
