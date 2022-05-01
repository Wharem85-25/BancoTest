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
	const [chequeI, setChequeI] = useState('');
	const [chequeF, setChequeF] = useState('');
	const [arreglo, setArreglo] = useState('');
	const [cliente, setCliente] = useState('');
	const [cuenta, setCuenta] = useState('');
	const [estatus, setEstatus] = useState('');

	var obj = {
		cheque_inicial: parseInt(chequeI),
		cheque_final: parseInt(chequeF),
		arreglo_cheques: arreglo,
		clienteId: parseInt(cliente),
		cuentaId: parseInt(cuenta),
		estatusChequesId: parseInt(estatus)
	}

	const fetchData = async ({cheque_inicial, cheque_final, arreglo_cheques, clienteId, cuentaId, estatusChequesId}) => {
    try {
       const { data } = await axios.post(`${API}/chequera`,
        {
          cheque_inicial, cheque_final, arreglo_cheques, clienteId, cuentaId, estatusChequesId
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
			<TextField id="outlined-number" label="Cheque inicial" type="number" InputLabelProps={{shrink: true}} onChange={event => setChequeI(event.target.value)} />
			<TextField id="outlined-number" label="Cheque final" type="number" InputLabelProps={{shrink: true}} onChange={event => setChequeF(event.target.value)} />
			<TextField id="outlined-search" label="Arregla cheques" type="search" onChange={event => setArreglo(event.target.value)} />
			<TextField id="outlined-number" label="ClienteId" type="number" InputLabelProps={{ shrink: true}} onChange={event => setCliente(event.target.value)} />
			<TextField id="outlined-number" label="CuentaId" type="number" InputLabelProps={{shrink: true}} onChange={event => setCuenta(event.target.value)} />
			<TextField id="outlined-number" label="EstatusId" type="number" InputLabelProps={{shrink: true}} onChange={event => setEstatus(event.target.value)} />
			<Button className="button-crear" sx={button} onClick={handleClick} >Nueva chequera</Button>
		</Box>
	);
};

export default FormChequera;
