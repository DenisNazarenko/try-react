import React from 'react';
import { hot } from 'react-hot-loader/root';
import AppHeader from './AppHeader';
import InputTypeahead from './InputTypeahead';

const API_URL = 'https://api.github.com/search/users';

const App = () => {
	const search = searchValue => {
	  const controller = new AbortController();
	  const signal = controller.signal;
		const url = _buildUrl(searchValue);
		// debugger;

		addEventListener('fetch', event => {
		  console.log(event);
    });

		fetch(url,{ signal })
      .then(response => {
        console.log(response);
    })

		// _fetchDataPromise(url);
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
