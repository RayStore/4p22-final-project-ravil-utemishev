import React from 'react'
import { useEffect, useState } from 'react';
import '../Catalog/Catalog.css';
import Card from '../../components/Card/Card';

function Store() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('https://63763b11b5f0e1eb85065d90.mockapi.io/autoparts')
        .then((response) => response.json())
        .then((result) => {
          setProducts(result);
        })
    }, []);
  
    return (
   
        <div className="Catalog-container">
          {
            products.map((item, index) => {
              return <Card key={index} title={item.name}
                img={item.imgUrl}
                price={item.cost} />
            })
  
          }
        </div>
          
    );
  }
  
  export default Store;