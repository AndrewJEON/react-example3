import React, { useState, useRef } from 'react';
import Card from './Card';
import css from './UseRef.module.css';

function UseRef() {
	const [text, setText] = useState('');

	const textInput = useRef();

	const displayText = (e) => {
		setText(e.target.value);
	};

	const onReset = () => {
		setText('');
		textInput.current.focus();
	};

	return (
		<Card className={css.use_ref}>
			<input onChange={displayText} value={text} ref={textInput} />
			<button onClick={onReset}>초기화</button>
			<div>
				<b>값 : {text}</b>
			</div>
		</Card>
	);
}

export default UseRef;
