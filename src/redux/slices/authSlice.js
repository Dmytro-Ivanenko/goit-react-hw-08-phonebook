import { createSlice } from '@reduxjs/toolkit';
import {
	signUp,
	login,
	logout,
	getCurrent,
} from '../operations/authOperations';

// handlers
const handlePending = (state) => {
	state.isLoading = true;
};
const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};
const handleUser = (store, { payload }) => {
	const { user, token } = payload;
	store.user = user;
	store.token = token;
	store.isLogin = true;
	store.isLoading = false;
};

// Slice
const authSlice = createSlice({
	name: 'contacts',
	initialState: {
		user: {},
		token: '',
		isLogin: false,
		isLoading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			// signUp
			.addCase(signUp.pending, handlePending)
			.addCase(signUp.fulfilled, handleUser)
			.addCase(signUp.rejected, handleRejected)

			// login
			.addCase(login.pending, handlePending)
			.addCase(login.fulfilled, handleUser)
			.addCase(login.rejected, handleRejected)

			// logout
			.addCase(logout.pending, handlePending)
			.addCase(logout.fulfilled, (store) => {
				store.user = {};
				store.isLoading = false;
				store.token = '';
				store.isLogin = false;
			})
			.addCase(logout.rejected, handleRejected)

			// get current user
			.addCase(getCurrent.pending, handlePending)
			.addCase(getCurrent.fulfilled, handleUser)
			.addCase(getCurrent.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.token = '';
				state.error = payload;
			});
	},
});

export const authReducer = authSlice.reducer;
