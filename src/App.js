import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/app.scss';

class App extends Component {
	render() {
		return (
			<div className="app">
				<h1>Hello World</h1>
			</div>
		);
	}
}

export default hot(App);
