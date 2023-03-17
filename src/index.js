import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import App from 'App';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename="/goit-react-hw-08-phonebook">
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
