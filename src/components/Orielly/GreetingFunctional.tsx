import React, { FC, useState, useEffect } from 'react';

interface GreetingProps {
	name?: string;
	starter?: string;
}

const Greeting: FC<GreetingProps> = ({ name, starter }: GreetingProps) => {
	console.log('rendering Greeting !');

	const [message, setMessage] = useState('');

	useEffect(() => {
		if (name && starter) {
			setMessage(`${starter} ${name}`);
		}
	}, [starter, name]);
	if (!name && !starter) {
		return <div>No name or phrase given.</div>;
	}

	return <div>{message}</div>;
};

export default Greeting;
