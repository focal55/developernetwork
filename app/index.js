import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Splash from './components/Splash';
import Main from './components/Main';

class App extends Component {
	render() {
		const store = createStore(
			reducers,
			applyMiddleware(ReduxThunk),
		);
		return (
			<Provider store={store}>
				<Splash />
			</Provider>
		);
	}
}

export default App;
