import React from 'react';
import Table from '../components/TableDatos'
import ButtonProducto from '../components/buttons/ButtonProducto'
import '../assets/styles/BodyTable.css'

const BodyTableCp = ({datos, columns}) => {

	return (
		<div className="pad">
			<div className="content-title">
				<p className="title-text">Producto</p>
			</div>
			<ButtonProducto />
			<Table datos={datos} columns={columns} />
		</div>
	);
};

export default BodyTableCp;
