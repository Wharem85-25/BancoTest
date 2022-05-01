import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const API = process.env.URLBASE;

const button = {
  marginTop: "20px",
  backgroundColor: "black",
	color: 'gray',
	fontWeight: 'bold',
	fontSize: '16px',
  alignItems: "center"
}

const FormChequera = () => {
	const [nombre, setnombre] = useState('');
	const [tasaInteres, settasaInteres] = useState('');
	const [manejaDatos, setmanejaDatos] = useState('');
	const [monedaId, setmonedaId] = useState('');

	var obj = {
		nombre: nombre,
		tasa_interes: parseInt(tasaInteres),
		maneja_datos: manejaDatos,
		monedaId: parseInt(monedaId),
	}

	const fetchData = async ({nombre, tasa_interes, maneja_datos, monedaId}) => {
    try {
       const { data } = await axios.post(`${API}/producto`,
        {
          nombre, tasa_interes, maneja_datos, monedaId
        }
      );
			console.log(data);
    } catch (error) {
      console.log(error);;
    }
  };

	const handleClick = () => {
    fetchData(obj)
  }

	return (
		<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '45ch' , color: "white"},}}
      	noValidate
      	autoComplete="off">
			<TextField id="outlined-search" label="nombre" type="search" onChange={event => setnombre(event.target.value)} />
			<TextField id="outlined-number" label="Tasa interes" type="number" InputLabelProps={{shrink: true}} onChange={event => settasaInteres(event.target.value)} />
			<TextField id="outlined-number" label="Maneja datos" type="search" onChange={event => setmanejaDatos(event.target.value)} />
			<TextField id="outlined-number" label="MonedaId" type="number" InputLabelProps={{ shrink: true}} onChange={event => setmonedaId(event.target.value)} />
			<Button className="button-crear" sx={button} onClick={handleClick} >Nueva chequera</Button>
		</Box>
	);
};

export default FormChequera;
