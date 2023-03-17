import React from 'react';
import styles from './HomePage.module.scss';
const HomePage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Welcome to your Contact List!</h1>
			<p className={styles.text}>
				Here you can easily store and manage your contacts with just their name
				and phone number.
			</p>
		</div>
	);
};

export default HomePage;
