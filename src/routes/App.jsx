import React from 'react';
import Home from '../pages/Home'
import useGetRows from '../hooks/getData';
import AppContext from '../context/AppContext';
import '../assets/styles/App.css'

const App = () => {
	const initialState = useGetRows();
	return (
		<AppContext.Provider value={initialState}>
			<Home />
		</AppContext.Provider>
	)
}

export default App;
