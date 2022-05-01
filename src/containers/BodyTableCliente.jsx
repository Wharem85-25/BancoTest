import React from 'react';
import Table from '../components/TableDatos'
import ButtonCliente from '../components/buttons/ButtonCliente'
import '../assets/styles/BodyTable.css'

const BodyTableCliente = ({datos, columns}) => {

	return (
		<div className="pad">
			<Table datos={datos} columns={columns} />
			<ButtonCliente />
		</div>
	);
};

export default BodyTableCliente;
