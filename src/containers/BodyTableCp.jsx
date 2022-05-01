import React from 'react';
import Table from '../components/TableDatos'
import ButtonChequesP from '../components/buttons/ButtonChequesP'
import '../assets/styles/BodyTable.css'

const BodyTableCp = ({datos, columns}) => {

	return (
		<div className="pad">
			<Table datos={datos} columns={columns} />
			<ButtonChequesP />
		</div>
	);
};

export default BodyTableCp;
