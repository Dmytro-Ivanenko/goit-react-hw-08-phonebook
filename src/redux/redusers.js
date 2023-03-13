import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './slices/authSlice';
import { contactsReducer } from './slices/contactsSlice';
import { filtersReducer } from './slices/filterSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
	auth: persistedAuthReducer,
	contacts: contactsReducer,
	filter: filtersReducer,
});

export default rootReducer;
