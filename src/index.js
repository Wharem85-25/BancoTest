import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import Chequera from './pages/Chequera';
import ChequesProducto from './pages/ChequesProducto';
import Cliente from './pages/Cliente';
import CodigoTransaccion from './pages/CodigoTransaccion';
import Cuenta from './pages/Cuenta';
import Home from './pages/Home'
import Producto from './pages/Producto';
import Transaccion from './pages/Transaccion';
import Layout from './containers/Layout'
import App from './routes/App'


const container = document.getElementById('app')
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Layout>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="chequera" element={<Chequera />} />
				<Route path="home" element={<Home />} />
				<Route path="chequeraProducto" element={<ChequesProducto />} />
				<Route path="cliente" element={<Cliente />} />
				<Route path="codigo" element={<CodigoTransaccion />} />
				<Route path="cuenta" element={<Cuenta />} />
				<Route path="producto" element={<Producto />} />
				<Route path="transaccion" element={<Transaccion />} />
			</Routes>
		</Layout>
	</BrowserRouter>
);
