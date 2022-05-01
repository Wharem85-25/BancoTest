import React, {useState, useEffect} from 'react';
import BodyTableCliente from '../containers/BodyTableCliente'
import Header from '../containers/Header'

const URLBASE = process.env.URLBASE;

const Cliente = () => {
	const [datos, setDatos] = useState([]);
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		fetch(`${URLBASE}/cliente`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setDatos(data)
			})
			fetch(`${URLBASE}/cliente/columnsName`)
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
			<BodyTableCliente datos={datos} columns={columns} />
		</div>
	);
};

export default Cliente;
