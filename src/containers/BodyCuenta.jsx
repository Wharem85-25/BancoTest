import React from 'react';
import Table from '../components/TableDatos'
import ButtonCuenta from '../components/buttons/ButtonCuenta'
import '../assets/styles/BodyTable.css'

const BodyCuenta = ({datos, columns}) => {

	return (
		<div className="pad">
			<div className="content-title">
				<p className="title-text">Cuenta</p>
			</div>
			<ButtonCuenta />
			<Table datos={datos} columns={columns} />
		</div>
	);
};

export default BodyCuenta;
