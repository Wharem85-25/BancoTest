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


const FormPatchProducto = () => {
	const [id, setId] = useState('');
	const [nombre, setnombre] = useState('');
	const [tasaInteres, settasaInteres] = useState('');
	const [manejaDatos, setmanejaDatos] = useState('');
	const [monedaId, setmonedaId] = useState('');
	const [patch, setPatch] = useState('')

	var data = {
		nombre: nombre,
		tasa_interes: parseInt(tasaInteres),
		maneja_datos: manejaDatos,
		monedaId: parseInt(monedaId),
	}

	function fetchData() {
		try {
			axios
				.patch(`${API}/producto/${id}`, {...data})
				.then((response) => {
					setPatch(response.data);
					console.log(data);
				})
		} catch (error) {
			console.log(error)
		}
	}

	const handleClick = () => {
    fetchData(data)
  }

	return (
		<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '45ch' , color: "white"},}}
      	noValidate
      	autoComplete="off">
			<TextField id="outlined-number" label="Id" type="number" InputLabelProps={{ shrink: true}} onChange={event => setId(event.target.value)} />
			<TextField id="outlined-search" label="nombre" type="search" onChange={event => setnombre(event.target.value)} />
			<TextField id="outlined-number" label="Tasa interes" type="number" InputLabelProps={{shrink: true}} onChange={event => settasaInteres(event.target.value)} />
			<TextField id="outlined-number" label="Maneja datos" type="search" onChange={event => setmanejaDatos(event.target.value)} />
			<TextField id="outlined-number" label="MonedaId" type="number" InputLabelProps={{ shrink: true}} onChange={event => setmonedaId(event.target.value)} />
			<Button className="button-crear" sx={button} onClick={handleClick} >Enviar</Button>
		</Box>
	);
};

const FormPatchChequera = () => {
	const [id, setId] = useState('');
	const [chequeI, setChequeI] = useState('');
	const [chequeF, setChequeF] = useState('');
	const [arreglo, setArreglo] = useState('');
	const [cliente, setCliente] = useState('');
	const [cuenta, setCuenta] = useState('');
	const [estatus, setEstatus] = useState('');
	const [patch, setPatch] = useState('')

	var data = {
		cheque_inicial: parseInt(chequeI),
		cheque_final: parseInt(chequeF),
		arreglo_cheques: arreglo,
		clienteId: parseInt(cliente),
		cuentaId: parseInt(cuenta),
		estatusChequesId: parseInt(estatus)
	}

	function fetchData() {
		try {
			axios
				.patch(`${API}/chequera/${id}`, {...data})
				.then((response) => {
					setPatch(response.data);
					console.log(data);
				})
		} catch (error) {
			console.log(error)
		}
	}

	const handleClick = () => {
    fetchData(data)
  }

	return(
		<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '45ch' , color: "white"},}}
      	noValidate
      	autoComplete="off">
			<TextField id="outlined-number" label="Id" type="number" InputLabelProps={{shrink: true}} onChange={event => setId(event.target.value)} />
			<TextField id="outlined-number" label="Cheque inicial" type="number" InputLabelProps={{shrink: true}} onChange={event => setChequeI(event.target.value)} />
			<TextField id="outlined-number" label="Cheque final" type="number" InputLabelProps={{shrink: true}} onChange={event => setChequeF(event.target.value)} />
			<TextField id="outlined-search" label="Arregla cheques" type="search" onChange={event => setArreglo(event.target.value)} />
			<TextField id="outlined-number" label="ClienteId" type="number" InputLabelProps={{ shrink: true}} onChange={event => setCliente(event.target.value)} />
			<TextField id="outlined-number" label="CuentaId" type="number" InputLabelProps={{shrink: true}} onChange={event => setCuenta(event.target.value)} />
			<TextField id="outlined-number" label="EstatusId" type="number" InputLabelProps={{shrink: true}} onChange={event => setEstatus(event.target.value)} />
			<Button className="button-crear" sx={button} onClick={handleClick} >Nueva chequera</Button>
		</Box>
	)
}

const FormPatchChequeraP = () => {
	const [id, setId] = useState('');
	const [cantidad, setcantidad] = useState('');
	const [chequeraId, setchequeraId] = useState('');
	const [productoId, setproductoId] = useState('');
	const [tipoChequeraId, settipoChequeraId] = useState('');
	const [patch, setPatch] = useState('')

	var data = {
		cantidad: cantidad,
		chequeraId: parseInt(chequeraId),
		productoId: parseInt(productoId),
		tipoChequeraId: parseInt(tipoChequeraId),
	}

	function fetchData() {
		try {
			axios
				.patch(`${API}/chequesProducto/${id}`, {...data})
				.then((response) => {
					setPatch(response.data);
					console.log(data);
				})
		} catch (error) {
			console.log(error)
		}
	}

	const handleClick = () => {
    fetchData(data)
  }

	return (
		<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '45ch' , color: "white"},}}
      	noValidate
      	autoComplete="off">
			<TextField id="outlined-number" label="Id" type="number" InputLabelProps={{shrink: true}} onChange={event => setId(event.target.value)} />
			<TextField id="outlined-number" label="Cantidad" type="number" InputLabelProps={{shrink: true}} onChange={event => setcantidad(event.target.value)} />
			<TextField id="outlined-number" label="ChequeraId" type="number" InputLabelProps={{shrink: true}} onChange={event => setchequeraId(event.target.value)} />
			<TextField id="outlined-number" label="ProductoId" type="search" onChange={event => setproductoId(event.target.value)} />
			<TextField id="outlined-number" label="Tipo chequera id" type="number" InputLabelProps={{ shrink: true}} onChange={event => settipoChequeraId(event.target.value)} />
			<Button className="button-crear" sx={button} onClick={handleClick} >Nuevo chequera producto</Button>
		</Box>
	);
}

const FormPatchCliente = () => {
	const [id, setId] = useState('');
	const [nombre, setnombre] = useState('');
	const [fechaNacimiento, setfechaNacimiento] = useState('');
	const [actividad, setactividad] = useState('');
	const [ingresos, setingresos] = useState('');
	const [dpi, setdpi] = useState('');
	const [nacionalidadId, setnacionalidadId] = useState('');
	const [patch, setPatch] = useState('')

	var data = {
		nombre: nombre,
		fecha_nacimiento: fechaNacimiento,
		actividad_economica: actividad,
		ingresos_mensuales: parseInt(ingresos),
		dpi: parseInt(dpi),
		nacionalidadId: parseInt(nacionalidadId)
	}

	function fetchData() {
		try {
			axios
				.patch(`${API}/cliente/${id}`, {...data})
				.then((response) => {
					setPatch(response.data);
					console.log(data);
				})
		} catch (error) {
			console.log(error)
		}
	}

	const handleClick = () => {
    fetchData(data)
  }

	return (
		<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '45ch' , color: "white"},}}
      	noValidate
      	autoComplete="off">
			<TextField id="outlined-number" label="Id" type="number" InputLabelProps={{shrink: true}} onChange={event => setId(event.target.value)} />
			<TextField id="outlined-search" label="Nombre" type="search" onChange={event => setnombre(event.target.value)} />
			<TextField id="outlined-number" label="Fecha de nacimiento" type="date" InputLabelProps={{shrink: true}} onChange={event => setfechaNacimiento(event.target.value)} />
			<TextField id="outlined-search" label="Actividad economica" type="search" onChange={event => setactividad(event.target.value)} />
			<TextField id="outlined-number" label="Ingresos mensuales" type="number" InputLabelProps={{ shrink: true}} onChange={event => setingresos(event.target.value)} />
			<TextField id="outlined-numer" label="dpi" type="number" InputLabelProps={{shrink: true}} onChange={event => setdpi(event.target.value)} />
			<TextField id="outlined-number" label="nacionalidadId" type="number" InputLabelProps={{shrink: true}} onChange={event => setnacionalidadId(event.target.value)} />
			<Button className="button-crear" sx={button} onClick={handleClick} >Modificar Cliente</Button>
		</Box>
	);
}

const FormPatchCodigo = () => {
	const [id, setId] = useState('');
	const [codigo, setcodigo] = useState('');
	const [descripcion, setdescripcion] = useState('');
	const [tipo, settipo] = useState('');
	const [patch, setPatch] = useState('')

	var data = {
		codigo_transaccion: codigo,
		descripcion: descripcion,
		tipoTransaccionId: parseInt(tipo),
	}

	function fetchData() {
		try {
			axios
				.patch(`${API}/codigoTransaccion/${id}`, {...data})
				.then((response) => {
					setPatch(response.data);
					console.log(data);
				})
		} catch (error) {
			console.log(error)
		}
	}

	const handleClick = () => {
    fetchData(data)
  }

	return (
		<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '45ch' , color: "white"},}}
      	noValidate
      	autoComplete="off">
			<TextField id="outlined-number" label="Id" type="number" InputLabelProps={{shrink: true}} onChange={event => setId(event.target.value)} />
			<TextField id="outlined-search" label="Codigo Transaccion" type="search" onChange={event => setcodigo(event.target.value)} />
			<TextField id="outlined-search" label="Descripcion" type="search" onChange={event => setdescripcion(event.target.value)} />
			<TextField id="outlined-number" label="Tipo Transaccion Id" type="number" InputLabelProps={{shrink: true}} onChange={event => settipo(event.target.value)} />
			<Button className="button-crear" sx={button} onClick={handleClick} >Modificar Codigo</Button>
		</Box>
	);
}

const FormPatchCuenta = () => {
	const [id, setId] = useState('')
	const [saldo, setsaldo] = useState('');
	const [interesGanado, setinteresGanado] = useState('');
	const [montoReserva, setmontoReserva] = useState('');
	const [clienteId, setClienteId] = useState('');
	const [productoId, setproductoId] = useState('');
	const [patch, setPatch] = useState('')

	var data = {
		saldo: parseInt(saldo),
		interesGanado: parseInt(interesGanado),
		montoReserva: parseInt(montoReserva),
		clienteId: parseInt(clienteId),
		productoId: parseInt(productoId),
	}


	function fetchData() {
		try {
			axios
				.patch(`${API}/cuenta/${id}`, {...data})
				.then((response) => {
					setPatch(response.data);
					console.log(data);
				})
		} catch (error) {
			console.log(error)
		}
	}

	const handleClick = () => {
    fetchData(data)
  }

	return (
		<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '45ch' , color: "white"},}}
      	noValidate
      	autoComplete="off">
			<TextField id="outlined-number" label="id" type="number" InputLabelProps={{shrink: true}} onChange={event => setId(event.target.value)} />
			<TextField id="outlined-number" label="Saldo" type="number" InputLabelProps={{shrink: true}} onChange={event => setsaldo(event.target.value)} />
			<TextField id="outlined-number" label="Interes Ganado" type="number" InputLabelProps={{shrink: true}} onChange={event => setinteresGanado(event.target.value)} />
			<TextField id="outlined-number" label="Monto Reserva" type="number" InputLabelProps={{ shrink: true}} onChange={event => setmontoReserva(event.target.value)} />
			<TextField id="outlined-number" label="ClienteId" type="number" InputLabelProps={{ shrink: true}} onChange={event => setClienteId(event.target.value)} />
			<TextField id="outlined-number" label="ProductoId" type="number" InputLabelProps={{shrink: true}} onChange={event => setproductoId(event.target.value)} />
			<Button className="button-crear" sx={button} onClick={handleClick} >Nueva chequera</Button>
		</Box>
	);
}

const FormPatchTransaccion = () => {
	const [id, setId] = useState('');
	const [monto, setmonto] = useState('');
	const [fecha, setfecha] = useState('');
	const [noCheque, setnoCheque] = useState('');
	const [usuario, setusuario] = useState('');
	const [codigoTId, setcodigoTId] = useState('');
	const [origenId, setorigenId] = useState('');
	const [tipo, setTipo] = useState('');
	const [cuentaId, setCuentaId] = useState('');
	const [patch, setPatch] = useState('')

	var data = {
		mondo: parseInt(monto),
		fecha: fecha,
		no_cheque: parseInt(noCheque),
		usuario: usuario,
		codigoTransaccionId: parseInt(codigoTId),
		origenId: parseInt(origenId),
		tipoTransaccionId: parseInt(tipo),
		cuentaId: parseInt(cuentaId)
	}

	function fetchData() {
		try {
			axios
				.patch(`${API}/transacciones/${id}`, {...data})
				.then((response) => {
					setPatch(response.data);
					console.log(data);
				})
		} catch (error) {
			console.log(error)
		}
	}

	const handleClick = () => {
    fetchData(data)
  }

	return (
		<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '45ch' , color: "white"},}}
      	noValidate
      	autoComplete="off">
			<TextField id="outlined-number" label="Id" type="number" InputLabelProps={{shrink: true}} onChange={event => setId(event.target.value)} />
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
}

export default {
	FormPatchProducto,
	FormPatchChequera,
	FormPatchChequeraP,
	FormPatchCliente,
	FormPatchCliente,
	FormPatchCodigo,
	FormPatchCuenta,
	FormPatchTransaccion
};
