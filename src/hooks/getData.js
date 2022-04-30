import { useState, useEffect } from 'react'

const API = process.env.APICHEQUERA;

const getChequera = () => {
const [datos, setDatos] = useState([]);

useEffect(() => {
	fetch(API)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			setDatos(data)
		})
}, [])

	return datos;
}
