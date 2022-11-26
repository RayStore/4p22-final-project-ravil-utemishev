import React, { useState } from 'react';
import Card from './components/Card/Card';
import { useEffect } from 'react';


function IndexPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      console.log('useEffect');
      fetch('https://63763b11b5f0e1eb85065d90.mockapi.io/autoparts')
        .then((response) => response.json())
        .then((result) => {
        setProducts(result);
      })
  }, []);

  return (
         <div className="Index-container">
        {
          products.map((item, index) => {
            return <Card key={index} title={item.name}
              img={item.urlPng}
              price={item.cost} />
          })

        }
      </div>
  );
}

export default IndexPage;
