import React, { useState } from 'react';

const InputTypeahead = ({ search }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChanges = e => {
		setInputValue(e.target.value);

    if (e.target.value.length > 3) {
      search(e.target.value);
    }
	};

	const resetInputValue = e => {
	  e.preventDefault();

	  if (inputValue) {
      setInputValue('');
    }
	};

	return (
		<form className='input-typeahead__form'>
			<input className="input-typeahead__input" type="text" value={inputValue} onChange={handleInputChanges} />

      <button className="input-typeahead__reset" onClick={resetInputValue}>
        <span className="input-typeahead__reset__label">
          <svg className="input-typeahead__reset__icon"  viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </span>
      </button>


		</form>
	);
};

export default InputTypeahead;
