import React from 'react';
import Table from '../components/TableDatos'
import ButtonCliente from '../components/buttons/ButtonCliente'
import '../assets/styles/BodyTable.css'

const BodyTableCliente = ({datos, columns}) => {

	return (
		<div className="pad">
			<div className="content-title">
				<p className="title-text">Cliente</p>
			</div>
			<ButtonCliente />
			<Table datos={datos} columns={columns} />
		</div>
	);
};

export default BodyTableCliente;
