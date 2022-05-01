import React from 'react';
import Table from '../components/TableDatos'
import ButtonTransaccion from '../components/buttons/ButtonTransaccion'
import '../assets/styles/BodyTable.css'

const BodyTransaccion = ({datos, columns}) => {

	return (
		<div className="pad">
			<div className="content-title">
				<p className="title-text">Transaccion</p>
			</div>
			<ButtonTransaccion />
			<Table datos={datos} columns={columns} />
		</div>
	);
};

export default BodyTransaccion;
