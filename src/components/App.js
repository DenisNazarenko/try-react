import React from 'react';
import { hot } from 'react-hot-loader/root';
import AppHeader from './AppHeader';
import InputTypeahead from './InputTypeahead';

const App = () => {
	return (
		<div className="app">
			<AppHeader text="Try React" />
			<InputTypeahead />
		</div>
	);
};

export default hot(App);
