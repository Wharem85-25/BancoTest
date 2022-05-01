import React from 'react';
import Table from '../components/TableDatos'
import ButtonCodigo from '../components/buttons/ButtonCodigo'
import '../assets/styles/BodyTable.css'

const BodyCodigo = ({datos, columns}) => {

	return (
		<div className="pad">
			<div className="content-title">
				<p className="title-text">Transaccion</p>
			</div>
			<ButtonCodigo />
			<Table datos={datos} columns={columns} />
		</div>
	);
};

export default BodyCodigo;
