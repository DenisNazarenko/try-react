import React, { useState } from 'react';

const InputTypeahead = ({ search }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChanges = e => {
		setInputValue(e.target.value);
		console.log(inputValue, e.target.value);

		search(inputValue);
	};

	const resetInputValue = () => {
		setInputValue('');
	};

	return (
		<form>
			<input type="text" value={inputValue} onChange={handleInputChanges} />
			<span className="input-typeahead__">X</span>
		</form>
	);
};

export default InputTypeahead;
