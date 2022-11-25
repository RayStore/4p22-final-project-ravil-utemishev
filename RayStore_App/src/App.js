import './App.scss';
import React, { useState } from 'react';
import Card from './components/Card/Card'
// import axios from 'axios';
// import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://63763b11b5f0e1eb85065d90.mockapi.io/autoparts')
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      })
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="App-container">
        {
          products.map((item, index) => {
            return <Card key={index} title={item.name}
              img={item.urlPng}
              price={item.cost} />
          })

        }
      </div>
    <Footer />
    </div>
  );
}

export default App;