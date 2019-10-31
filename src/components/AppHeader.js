import React from 'react';

const AppHeader = props => {
	return (
		<header className="app-header">
			<div className="app-header__container">
        <h1 className="app-header__logo">{props.text}</h1>
			</div>
		</header>
	);
};

export default AppHeader;
