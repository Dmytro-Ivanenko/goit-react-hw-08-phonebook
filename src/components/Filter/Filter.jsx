import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/slices/filterSlice';
import { getFilter } from '../../redux/selectors';
import styles from './filter.module.scss';

const Filter = () => {
	const filter = useSelector(getFilter);
	const dispatch = useDispatch();

	return (
		<div className={styles.filterContainer}>
			<label className={styles.label}>
				Find contacts by name
				<input
					className={styles.input}
					type="text"
					value={filter}
					onChange={({ target }) => dispatch(setFilter(target.value))}
				/>
			</label>
		</div>
	);
};

export default Filter;
