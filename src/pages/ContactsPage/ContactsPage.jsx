import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Section from '../../components/Section/Section';
import ContactForm from '../../components/Forms/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Notification from '../../components/Notification/Notification';

import { fetchContacts } from '../../redux/operations/contactsOperations';
import { getContacts } from '../../redux/selectors';

const ContactsPage = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);

	useEffect(() => {
		dispatch(fetchContacts());
	}, []);

	return (
		<>
			<Section title="Phonebook">
				<ContactForm />
			</Section>

			<Section title="Contacts">
				{contacts?.length > 0 ? (
					<>
						<Filter />
						<ContactList />
					</>
				) : (
					<Notification />
				)}
			</Section>
		</>
	);
};

export default ContactsPage;
