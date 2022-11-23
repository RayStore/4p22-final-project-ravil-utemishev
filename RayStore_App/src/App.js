import './App.scss';
import React, { useState } from 'react';
import Card from './components/Card/Card'
// import axios from 'axios';
// import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button/Button';
import { useEffect } from 'react';
import Input from './components/Input/Input';

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
              description={item.category}
              img={item.urlPng}
              price={item.cost} />
          })

        }
      </div>
      <div className="App-newsletter">
        <h3> Подписаться на новости компании</h3>
        <Input />
        <Button text="Подписаться" />
      </div>
      <Footer />
    </div>
  );
}

export default App;