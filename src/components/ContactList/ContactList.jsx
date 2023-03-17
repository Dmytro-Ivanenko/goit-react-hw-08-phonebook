import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import { RotatingLines } from 'react-loader-spinner';
import { filteredList, getIsLoading } from '../../redux/selectors';
import { removeContact } from '../../redux/operations/contactsOperations';
import styles from './contactList.module.scss';

const ContactList = () => {
	const dispatch = useDispatch();

	const contactsArr = useSelector(filteredList);
	const isLoading = useSelector(getIsLoading);
	return isLoading ? (
		<RotatingLines
			strokeColor="grey"
			strokeWidth="5"
			animationDuration="0.75"
			width="96"
			visible={true}
		/>
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
				{isLoading ? (
					<RotatingLines
						strokeColor="grey"
						strokeWidth="5"
						animationDuration="0.75"
						width="96"
						visible={true}
					/>
				) : (
					contactsArr.map(({ id, name, number }) => {
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
					})
				)}
			</tbody>
		</table>
	);
};

export default ContactList;
