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

const FormCliente = () => {
	const [nombre, setnombre] = useState('');
	const [fechaNacimiento, setfechaNacimiento] = useState('');
	const [actividad, setactividad] = useState('');
	const [ingresos, setingresos] = useState('');
	const [dpi, setdpi] = useState('');
	const [nacionalidadId, setnacionalidadId] = useState('');

	var obj = {
		nombre: nombre,
		fecha_nacimiento: fechaNacimiento,
		actividad_economica: actividad,
		ingresos_mensuales: parseInt(ingresos),
		dpi: parseInt(dpi),
		nacionalidadId: parseInt(nacionalidadId)
	}

	const fetchData = async ({nombre, fecha_nacimiento, actividad_economica, ingresos_mensuales, dpi, nacionalidadId}) => {
    try {
       const { data } = await axios.post(`${API}/cliente`,
        {
          nombre, fecha_nacimiento, actividad_economica, ingresos_mensuales, dpi, nacionalidadId
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
			<TextField id="outlined-search" label="Nombre" type="search" onChange={event => setnombre(event.target.value)} />
			<TextField id="outlined-number" label="Fecha de nacimiento" type="date" InputLabelProps={{shrink: true}} onChange={event => setfechaNacimiento(event.target.value)} />
			<TextField id="outlined-search" label="Actividad economica" type="search" onChange={event => setactividad(event.target.value)} />
			<TextField id="outlined-number" label="Ingresos mensuales" type="number" InputLabelProps={{ shrink: true}} onChange={event => setingresos(event.target.value)} />
			<TextField id="outlined-numer" label="dpi" type="number" InputLabelProps={{shrink: true}} onChange={event => setdpi(event.target.value)} />
			<TextField id="outlined-number" label="nacionalidadId" type="number" InputLabelProps={{shrink: true}} onChange={event => setnacionalidadId(event.target.value)} />
			<Button className="button-crear" sx={button} onClick={handleClick} >Nuevo Cliente</Button>
		</Box>
	);
};

export default FormCliente;
