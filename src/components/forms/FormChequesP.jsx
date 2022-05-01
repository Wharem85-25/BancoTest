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

const FormChequesP = () => {
	const [cantidad, setcantidad] = useState('');
	const [chequeraId, setchequeraId] = useState('');
	const [productoId, setproductoId] = useState('');
	const [tipoChequeraId, settipoChequeraId] = useState('');

	var obj = {
		cantidad: cantidad,
		chequeraId: parseInt(chequeraId),
		productoId: parseInt(productoId),
		tipoChequeraId: parseInt(tipoChequeraId),

	}

	const fetchData = async ({cantidad, chequeraId, productoId, tipoChequeraId}) => {
    try {
       const { data } = await axios.post(`${API}/chequesProducto`,
        {
          cantidad, chequeraId, productoId, tipoChequeraId
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
			<TextField id="outlined-number" label="Cantidad" type="number" InputLabelProps={{shrink: true}} onChange={event => setcantidad(event.target.value)} />
			<TextField id="outlined-number" label="ChequeraId" type="number" InputLabelProps={{shrink: true}} onChange={event => setchequeraId(event.target.value)} />
			<TextField id="outlined-number" label="ProductoId" type="search" onChange={event => setproductoId(event.target.value)} />
			<TextField id="outlined-number" label="Tipo chequera id" type="number" InputLabelProps={{ shrink: true}} onChange={event => settipoChequeraId(event.target.value)} />
			<Button className="button-crear" sx={button} onClick={handleClick} >Nuevo chequera producto</Button>
		</Box>
	);
};

export default FormChequesP;
