import React, {useState, useEffect} from 'react';
import BodyCuenta from '../containers/BodyCuenta'
import Header from '../containers/Header'

const URLBASE = process.env.URLBASE;

const Cuenta = () => {
	const [datos, setDatos] = useState([]);
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		fetch(`${URLBASE}/cuenta`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setDatos(data)
			})
			fetch(`${URLBASE}/cuenta/columnsName`)
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
			<BodyCuenta datos={datos} columns={columns} />
		</div>
	);
};

export default Cuenta;
