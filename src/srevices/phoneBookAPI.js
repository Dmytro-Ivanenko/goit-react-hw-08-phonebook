import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = (token) => {
	if (token) {
		return (instance.defaults.headers.authorization = `Bearer ${token}`);
	}
	instance.defaults.headers.authorization = '';
};

//  auth
export const signUp = async (profileData) => {
	const { data } = await instance.post('/users/signup', profileData);
	setToken(data.token);

	return data;
};

export const login = async (profileData) => {
	const { data } = await instance.post('/users/login', profileData);
	setToken(data.token);
	return data;
};

export const logout = async () => {
	const { data } = await instance.post('/users/logout');
	setToken();
	return data;
};

export const getCurrent = async (token) => {
	try {
		setToken(token);
		const { data } = await instance.get('/users/current');
		console.log(data);
		return data;
	} catch (error) {
		setToken();
		throw error;
	}
};

//  contacts
export const getAllContacts = async () => {
	const { data } = await instance.get('/contacts');
	return data;
};

export const addContact = async (contact) => {
	const { data: result } = await instance.post('/contacts', contact); // name, number
	return result;
};

export const deleteContact = async (id) => {
	const { data } = await instance.delete(`/${id}`);
	return data;
};
