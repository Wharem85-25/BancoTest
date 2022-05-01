import React, {useState, useEffect} from 'react';
import BodyTable from '../containers/BodyTable';
import Header from '../containers/Header'

const API = process.env.APICHEQUERA;
const URLBASE = process.env.URLBASE;
const APICOLUM = process.env.APICOLUMN;

const Chequera = () => {
	const [datos, setDatos] = useState([]);
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		fetch(`${URLBASE}/${API}`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setDatos(data)
			})
			fetch(APICOLUM)
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
			<BodyTable datos={datos} columns={columns} />
		</div>
	);
};

export default Chequera;
