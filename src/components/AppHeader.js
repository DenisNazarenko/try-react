import React from 'react';

const AppHeader = props => {
	return (
		<header className="app-header">
			<div className="app-header__container">
				<div className="app-header__logo">{props.text}</div>
			</div>
		</header>
	);
};

export default AppHeader;
