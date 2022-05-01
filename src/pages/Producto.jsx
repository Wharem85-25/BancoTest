import React, {useState, useEffect} from 'react';
import BodyProducto from '../containers/BodyProducto'
import Header from '../containers/Header'

const URLBASE = process.env.URLBASE;

const Producto = () => {
	const [datos, setDatos] = useState([]);
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		fetch(`${URLBASE}/producto`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setDatos(data)
			})
			fetch(`${URLBASE}/producto/columnsName`)
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
			<BodyProducto datos={datos} columns={columns} />
		</div>
	);
};

export default Producto;
