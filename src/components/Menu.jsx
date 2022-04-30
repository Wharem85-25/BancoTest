import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import '../assets/styles/Menu.css'

const font = {
  backgroundColor: "black",
	color: 'white',
	fontWeight: 'bold',
	fontSize: '16px',
  height: '100%'
}

const button = {
	color: 'white',
  fontWeight: 'bold',
	fontSize: '18px'
}

const menu = {
  margin: '20px',
  paddingBottom: '20px',
  paddingTop: '10px',
}

const Header = () => {
	const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
			sx={font}
    >
      <Link className="text" to="/home">
      	<MenuItem sx={menu} >Home</MenuItem>
			</Link>
			<Link className="text" to="/chequera">
      	<MenuItem sx={menu} >Chequera</MenuItem>
			</Link>
			<Link className="text" to="/chequeraProducto">
      	<MenuItem sx={menu} >Cheques de Producto</MenuItem>
			</Link>
			<Link className="text" to="/Cliente">
      	<MenuItem sx={menu} >Cliente</MenuItem>
			</Link>
			<Link className="text" to="/codigo">
      	<MenuItem sx={menu} >Codigo de Transaccion</MenuItem>
			</Link>
			<Link className="text" to="/cuenta">
      	<MenuItem sx={menu} >Cuenta</MenuItem>
			</Link>
			<Link className="text" to="/producto">
      	<MenuItem sx={menu} >Producto</MenuItem>
			</Link>
			<Link className="text" to="/transaccion">
      	<MenuItem sx={menu} >Transaccion</MenuItem>
			</Link>
    </Box>
  );

  return (
    <div className="container-menu">
      {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={button} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Header;
