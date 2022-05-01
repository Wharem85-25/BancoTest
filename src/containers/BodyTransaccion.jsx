import React from 'react';
import Table from '../components/TableDatos'
import ButtonTransaccion from '../components/buttons/ButtonTransaccion'
import '../assets/styles/BodyTable.css'

const BodyTransaccion = ({datos, columns}) => {

	return (
		<div className="pad">
			<Table datos={datos} columns={columns} />
			<ButtonTransaccion />
		</div>
	);
};

export default BodyTransaccion;
