import { createSelector } from '@reduxjs/toolkit';

// Auth
export const getIsUserLogin = ({ auth }) => auth.isLogin;

export const getIsAuthLoading = ({ auth }) => auth.isLoading;
// export const getIsRefreshing = ({ auth }) => auth.isRefreshing;

export const getAuth = ({ auth }) => {
	const { isLogin, token } = auth;
	return { isLogin, token };
};

export const getUser = ({ auth }) => auth.user;

// Contacts
export const getFilter = (state) => state.filter;
export const getContacts = (state) => state.contacts.items;

export const filteredList = createSelector(
	[getContacts, getFilter],
	(contacts, filter) => {
		return contacts.filter(({ name }) => {
			return name.toLowerCase().includes(filter.toLowerCase());
		});
	}
);

export const getIsLoading = (state) => state.contacts.isLoading;
export const getError = (state) => state.contacts.error;
