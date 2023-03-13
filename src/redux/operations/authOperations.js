import * as Api from '../../srevices/phoneBookAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk(
	'auth/signUp',
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

export const getCurrent = Api.createAsyncThunk(
	'auth/delete',
	async (token, { rejectWithValue }) => {
		try {
			const response = await Api.getCurrent(token);
			return response;
		} catch ({ response }) {
			return rejectWithValue(response.data);
		}
	}
);
