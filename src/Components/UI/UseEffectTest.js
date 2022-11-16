import React, { useEffect, useState, useRef } from 'react';

function UseEffect() {
	const [name, setName] = useState('초기 닉네임');

	const mounted = useRef(false);
	//  업데이트뿐만 아니라 마운터 될 때도 실행되므로 업데이트될 때만 실행시키고 싶다면 아래와 같은 방법을 사용
	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
		} else {
			console.log(name);
			console.log('업데이트 될 때마다 실행');
		}
	}, [name]);

	useEffect(() => {
		console.log('컴포넌트 나타남');
		console.log(name);
		// useEffect는 함수를 반환할 수 있는데 이 함수를 cleanup이라고 합니다.
		return () => {
			// 특정 값이 업데이트되기 직전에 cleanup 함수를 실행시키고 싶다면 deps에 해당 값을 넣어주면 됩니다.
			console.log('cleanUp 함수');
		};
	});

	const onClick = () => {
		setName('닉네임 변경');
	};
	return (
		<div>
			{name} <button onClick={onClick}>변경</button>
		</div>
	);
}

export default UseEffect;
