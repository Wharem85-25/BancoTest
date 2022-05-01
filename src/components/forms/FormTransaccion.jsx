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

const FormTransaccion = () => {
	const [monto, setmonto] = useState('');
	const [fecha, setfecha] = useState('');
	const [noCheque, setnoCheque] = useState('');
	const [usuario, setusuario] = useState('');
	const [codigoTId, setcodigoTId] = useState('');
	const [origenId, setorigenId] = useState('');
	const [tipo, setTipo] = useState('');
	const [cuentaId, setCuentaId] = useState('');

	var obj = {
		mondo: parseInt(monto),
		fecha: fecha,
		no_cheque: parseInt(noCheque),
		usuario: usuario,
		codigoTransaccionId: parseInt(codigoTId),
		origenId: parseInt(origenId),
		tipoTransaccionId: parseInt(tipo),
		cuentaId: parseInt(cuentaId)
	}

	const fetchData = async ({mondo, fecha, no_cheque, usuario, codigoTransaccionId, origenId, tipoTransaccionId, cuentaId}) => {
    try {
       const { data } = await axios.post(`${API}/transacciones`,
        {
          mondo, fecha, no_cheque, usuario, codigoTransaccionId, origenId, tipoTransaccionId, cuentaId
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
			<TextField id="outlined-number" label="Monto" type="number" InputLabelProps={{shrink: true}} onChange={event => setmonto(event.target.value)} />
			<TextField id="outlined-number" label="Fecha" type="date" InputLabelProps={{shrink: true}} onChange={event => setfecha(event.target.value)} />
			<TextField id="outlined-number" label="No.Cheque" type="number" InputLabelProps={{shrink: true}} onChange={event => setnoCheque(event.target.value)} />
			<TextField id="outlined-search" label="Usuario" type="search" onChange={event => setusuario(event.target.value)} />
			<TextField id="outlined-number" label="CodigoTransaccionId" type="number" InputLabelProps={{shrink: true}} onChange={event => setcodigoTId(event.target.value)} />
			<TextField id="outlined-number" label="OrigenId" type="number" InputLabelProps={{shrink: true}} onChange={event => setorigenId(event.target.value)} />
			<TextField id="outlined-number" label="Tipo TransaccionId" type="number" InputLabelProps={{shrink: true}} onChange={event => setTipo(event.target.value)} />
			<TextField id="outlined-number" label="CuentaId" type="number" InputLabelProps={{shrink: true}} onChange={event => setCuentaId(event.target.value)} />
			<Button className="button-crear" sx={button} onClick={handleClick} >Nueva chequera</Button>
		</Box>
	);
};

export default FormTransaccion;
