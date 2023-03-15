import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactsSlice';
import { filtersReducer } from './slices/filterSlice';
import { authReducer } from './slices/authSlice';
const rootReducer = combineReducers({
	auth: authReducer,
	contacts: contactsReducer,
	filter: filtersReducer,
});

export default rootReducer;
