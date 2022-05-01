import React, {useState, useEffect} from 'react';
import BodyTableCp from '../containers/BodyTableCp'
import Header from '../containers/Header'

const URLBASE = process.env.URLBASE;

const ChequesProducto = () => {
	const [datos, setDatos] = useState([]);
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		fetch(`${URLBASE}/chequesProducto`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setDatos(data)
			})
			fetch(`${URLBASE}/chequesProducto/columnsName`)
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
			<BodyTableCp datos={datos} columns={columns} />
		</div>
	);
};

export default ChequesProducto;
