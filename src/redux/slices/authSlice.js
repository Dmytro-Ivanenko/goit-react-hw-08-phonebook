import { createSlice } from '@reduxjs/toolkit';
import {
	signup,
	login,
	logout,
	getCurrent,
} from '../operations/authOperations';

// handlers
const handlePending = (state) => {
	state.isLoading = true;
	state.error = null;
};
const handleRejected = (state, { payload }) => {
	state.isLoading = false;
	state.error = payload;
};
const handleUser = (state, { payload }) => {
	const { user, token } = payload;
	state.user = user;
	state.token = token;
	state.isLogin = true;
	state.isLoading = false;
	state.error = null;
};

// Slice
const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: { name: '', email: '' },
		token: '',
		isLogin: false,
		isLoading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			// signup
			.addCase(signup.pending, handlePending)
			.addCase(signup.fulfilled, handleUser)
			.addCase(signup.rejected, handleRejected)

			// login
			.addCase(login.pending, handlePending)
			.addCase(login.fulfilled, handleUser)
			.addCase(login.rejected, handleRejected)

			// logout
			.addCase(logout.pending, handlePending)
			.addCase(logout.fulfilled, (state) => {
				state.user = {};
				state.isLoading = false;
				state.token = '';
				state.isLogin = false;
			})
			.addCase(logout.rejected, handleRejected)

			// get current user
			.addCase(getCurrent.pending, (state) => {
				state.isLoading = true;
				state.isRefreshing = true;
			})
			.addCase(getCurrent.fulfilled, (state, { payload }) => {
				state.user = payload;
				state.isLogin = true;
				state.isLoading = false;
				state.isRefreshing = false;
			})
			.addCase(getCurrent.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.token = '';
				state.error = payload;
				state.isRefreshing = false;
			});
	},
});

export const authReducer = authSlice.reducer;
