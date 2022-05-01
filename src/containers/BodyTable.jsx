import React from 'react';
import Table from '../components/TableDatos'
import ButtonPost from '../components/buttons/ButtonPost'
import '../assets/styles/BodyTable.css'

const BodyTable = ({datos, columns}) => {

	return (
		<div className="pad">
			<div className="content-title">
				<p className="title-text">Chequera</p>
			</div>
			<ButtonPost />
			<div className="space">
				<Table datos={datos} columns={columns} />
			</div>
		</div>
	);
};

export default BodyTable;
