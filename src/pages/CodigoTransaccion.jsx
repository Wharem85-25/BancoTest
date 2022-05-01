import React, {useState, useEffect} from 'react';
import BodyCodigo from '../containers/BodyCodigo'
import Header from '../containers/Header'

const URLBASE = process.env.URLBASE;

const CodigoTransaccion = () => {
	const [datos, setDatos] = useState([]);
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		fetch(`${URLBASE}/codigoTransaccion`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setDatos(data)
			})
			fetch(`${URLBASE}/codigoTransaccion/columnsName`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setColumns(data)
			})
	}, [])

	return (
		<div>
			<Header />
			<BodyCodigo datos={datos} columns={columns} />
		</div>
	);
};

export default CodigoTransaccion;
