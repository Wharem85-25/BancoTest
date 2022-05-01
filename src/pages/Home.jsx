import React from 'react';
import Header from '../containers/Header'
import coin from '../assets/img/coin.gif'
import '../assets/styles/Home.css'

const Home = () => {
	return (
		<div className="home">
		<Header />
			<p className="titulo" >Bienvenido a Banco Test</p>
			<p className="subtitle" >En la barra de menu podra encontrar una lista de datos los cuales podra crear, modificar o eliminar dependiendo lo que necesite</p>
			<img className="coin" src={coin} alt="coin" />
		</div>
	);
};

export default Home;
