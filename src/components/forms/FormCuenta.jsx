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
	const [saldo, setsaldo] = useState('');
	const [interesGanado, setinteresGanado] = useState('');
	const [montoReserva, setmontoReserva] = useState('');
	const [clienteId, setClienteId] = useState('');
	const [productoId, setproductoId] = useState('');

	var obj = {
		saldo: parseInt(saldo),
		interesGanado: parseInt(interesGanado),
		montoReserva: parseInt(montoReserva),
		clienteId: parseInt(clienteId),
		productoId: parseInt(productoId),
	}

	const fetchData = async ({saldo, interesGanado, montoReserva, clienteId, productoId}) => {
    try {
       const { data } = await axios.post(`${API}/cuenta`,
        {
          saldo, interesGanado, montoReserva, clienteId, productoId
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
			<TextField id="outlined-number" label="Saldo" type="number" InputLabelProps={{shrink: true}} onChange={event => setsaldo(event.target.value)} />
			<TextField id="outlined-number" label="Interes Ganado" type="number" InputLabelProps={{shrink: true}} onChange={event => setinteresGanado(event.target.value)} />
			<TextField id="outlined-number" label="Monto Reserva" type="number" InputLabelProps={{ shrink: true}} onChange={event => setmontoReserva(event.target.value)} />
			<TextField id="outlined-number" label="ClienteId" type="number" InputLabelProps={{ shrink: true}} onChange={event => setClienteId(event.target.value)} />
			<TextField id="outlined-number" label="ProductoId" type="number" InputLabelProps={{shrink: true}} onChange={event => setproductoId(event.target.value)} />
			<Button className="button-crear" sx={button} onClick={handleClick} >Nueva chequera</Button>
		</Box>
	);
};

export default FormChequera;
