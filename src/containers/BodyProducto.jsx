import React from 'react';
import Table from '../components/TableDatos'
import ButtonProducto from '../components/buttons/ButtonProducto'
import '../assets/styles/BodyTable.css'

const BodyTableCp = ({datos, columns}) => {

	return (
		<div className="pad">
			<Table datos={datos} columns={columns} />
			<ButtonProducto />
		</div>
	);
};

export default BodyTableCp;
