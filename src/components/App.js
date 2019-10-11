import React from 'react';
import { hot } from 'react-hot-loader/root';
import AppHeader from './AppHeader';
import InputTypeahead from './InputTypeahead';

const API_URL = 'https://api.npms.io/v2/search';

const App = () => {
	const search = inputValue => {
		const url = _buildUrl(inputValue);
	};

	function _buildUrl(query, items = 10) {
		return `${API_URL}?q=${query}&size=${items}`;
	}

	return (
		<div className="app">
			<AppHeader text="Try React" />
			<InputTypeahead search={search} />
		</div>
	);
};

export default hot(App);
