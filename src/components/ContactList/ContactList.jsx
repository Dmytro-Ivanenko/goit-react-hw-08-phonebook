import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Loader from '../Loader/Loader';
import { filteredList, getIsLoading } from '../../redux/selectors';
import { removeContact } from '../../redux/operations/contactsOperations';
import styles from './contactList.module.scss';

const ContactList = () => {
	const dispatch = useDispatch();

	const contactsArr = useSelector(filteredList);
	const isLoading = useSelector(getIsLoading);
	return isLoading ? (
		<Loader />
	) : (
		<table className={styles.table}>
			<thead>
				<tr>
					<th className={styles.th}>Name</th>
					<th className={styles.th}>Number</th>
					<th className={styles.th}>Delete Contact</th>
				</tr>
			</thead>
			<tbody>
				{contactsArr.map(({ id, name, number }) => {
					return (
						<tr key={id} className={styles.tr}>
							<td className={styles.name}>{name}</td>
							<td className={styles.number}>{number}</td>
							<td className={styles.button}>
								<Button
									type="button"
									variant="text"
									onClick={() => dispatch(removeContact(id))}
								>
									Delete
								</Button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default ContactList;
