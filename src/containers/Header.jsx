import React from 'react';
import Menu from '../components/Menu';
import Title from '../components/Title'
import '../assets/styles/Header.css'

const Header = () => {
	return (
		<div className="content-header">
			<Menu />
			<Title />
		</div>
	);
};

export default Header;
