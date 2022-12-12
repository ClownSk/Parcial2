import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setP] = useState([])
  
  const getP = async () => {
    const request = await fetch('https://dummyjson.com/products ');
    const response = request.ok ? await request.json() : await request.text();
    console.log(response);
    setP(response.products);
  }
  useEffect(() =>{
    getP()
  },[])
  return (
    <div className="App">
      <header>
        <ul>
          {
            products.map(function(item,id){
              return (
                <li key={id}>{item.title}</li>
              )
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
