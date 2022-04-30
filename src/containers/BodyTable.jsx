import React from 'react';
import Table from '../components/TableDatos'
import ButtonPost from '../components/ButtonPost'
import '../assets/styles/BodyTable.css'

const BodyTable = () => {
	return (
		<div className="pad">
			<Table />
			<ButtonPost />
		</div>
	);
};

export default BodyTable;
