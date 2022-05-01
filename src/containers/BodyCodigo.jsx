import React from 'react';
import Table from '../components/TableDatos'
import ButtonCodigo from '../components/buttons/ButtonCodigo'
import '../assets/styles/BodyTable.css'

const BodyCodigo = ({datos, columns}) => {

	return (
		<div className="pad">
			<Table datos={datos} columns={columns} />
			<ButtonCodigo />
		</div>
	);
};

export default BodyCodigo;
