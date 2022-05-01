import React, {useState, useEffect} from 'react';
import BodyTransaccion from '../containers/BodyTransaccion'
import Header from '../containers/Header'

const URLBASE = process.env.URLBASE;

const Transaccion = () => {
	const [datos, setDatos] = useState([]);
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		fetch(`${URLBASE}/transacciones`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setDatos(data)
			})
			fetch(`${URLBASE}/transacciones/columnsName`)
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
			<BodyTransaccion datos={datos} columns={columns} />
		</div>
	);
};

export default Transaccion;
