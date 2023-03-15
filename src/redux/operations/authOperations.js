import * as Api from '../../srevices/phoneBookAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signup = createAsyncThunk(
	'auth/signup',
	async (profileData, { rejectWithValue }) => {
		try {
			const response = await Api.signUp(profileData);
			return response;
		} catch ({ response }) {
			return rejectWithValue(response.data);
		}
	}
);

export const login = createAsyncThunk(
	'auth/login',
	async (profileData, { rejectWithValue }) => {
		try {
			const response = await Api.login(profileData);
			return response;
		} catch ({ response }) {
			return rejectWithValue(response.data);
		}
	}
);

export const logout = createAsyncThunk(
	'auth/logout',
	async (profileData, { rejectWithValue }) => {
		try {
			const response = await Api.logout(profileData);
			return response;
		} catch ({ response }) {
			return rejectWithValue(response.data);
		}
	}
);

export const getCurrent = createAsyncThunk(
	'auth/getCurrent',
	async (_, { rejectWithValue, getState }) => {
		try {
			const { auth } = getState();
			const data = await Api.getCurrent(auth.token);
			return data;
		} catch ({ response }) {
			return rejectWithValue(response);
		}
	},
	{
		condition: (_, { getState }) => {
			const { auth } = getState();
			if (!auth.token) {
				return false;
			}
		},
	}
);
