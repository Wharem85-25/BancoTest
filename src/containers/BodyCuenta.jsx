import React from 'react';
import Table from '../components/TableDatos'
import ButtonCuenta from '../components/buttons/ButtonCuenta'
import '../assets/styles/BodyTable.css'

const BodyCuenta = ({datos, columns}) => {

	return (
		<div className="pad">
			<Table datos={datos} columns={columns} />
			<ButtonCuenta />
		</div>
	);
};

export default BodyCuenta;
