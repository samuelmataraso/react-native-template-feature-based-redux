import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import AppNavigation from '~/navigation';

const App = () => (
	<Provider store={store}>
		<AppNavigation />
	</Provider>
);

export default App;
