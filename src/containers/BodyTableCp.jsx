import React from 'react';
import Table from '../components/TableDatos'
import ButtonChequesP from '../components/buttons/ButtonChequesP'
import '../assets/styles/BodyTable.css'

const BodyTableCp = ({datos, columns}) => {

	return (
		<div className="pad">
			<div className="content-title">
				<p className="title-text">Chequera Producto</p>
			</div>
			<ButtonChequesP />
			<Table datos={datos} columns={columns} />
		</div>
	);
};

export default BodyTableCp;
