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

const FormCodigo = () => {
	const [codigo, setcodigo] = useState('');
	const [descripcion, setdescripcion] = useState('');
	const [tipo, settipo] = useState('');

	var obj = {
		codigo_transaccion: codigo,
		descripcion: descripcion,
		tipoTransaccionId: parseInt(tipo),
	}

	const fetchData = async ({codigo_transaccion, descripcion, tipoTransaccionId}) => {
    try {
       const { data } = await axios.post(`${API}/codigoTransaccion`,
        {
          codigo_transaccion, descripcion, tipoTransaccionId
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
			<TextField id="outlined-search" label="Codigo Transaccion" type="search" onChange={event => setcodigo(event.target.value)} />
			<TextField id="outlined-search" label="Descripcion" type="search" onChange={event => setdescripcion(event.target.value)} />
			<TextField id="outlined-number" label="Tipo Transaccion Id" type="number" InputLabelProps={{shrink: true}} onChange={event => settipo(event.target.value)} />
			<Button className="button-crear" sx={button} onClick={handleClick} >Nuevo Codigo</Button>
		</Box>
	);
};

export default FormCodigo;
