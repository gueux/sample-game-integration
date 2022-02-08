import React from 'react';

const App = () => {
	return (
		<div>
			<h2>{process.env.REACT_APP_CLIENT_ID}</h2>
			<h2>{process.env.REACT_APP_CLIENT_SECRET}</h2>
		</div>
	);
};

export default App;