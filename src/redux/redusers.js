import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactsSlice';
import { filtersReducer } from './slices/filterSlice';

const rootReducer = combineReducers({
	contacts: contactsReducer,
	filter: filtersReducer,
});

export default rootReducer;
