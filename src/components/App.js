import React from 'react';
import { hot } from 'react-hot-loader/root';
import AppHeader from './AppHeader';
import InputTypeahead from './InputTypeahead';
import axios from 'axios';

const API_URL = 'http://npmsearch.com/';

const App = () => {
	const search = searchValue => {
		const url = _buildUrl(searchValue);

		_fetchDataPromise(url);
	};

	function _buildUrl(query, items = 10) {
		return `${API_URL}?q=${query}`;
	}

	function _fetchDataPromise(url) {
	  fetch(url)
      .then(response => {
        console.log(response);
      })
  }

	return (
		<div className="app">
			<AppHeader text="Try React" />

      <div className="app-container">
        <InputTypeahead search={search} />
      </div>
		</div>
	);
};

export default hot(App);
