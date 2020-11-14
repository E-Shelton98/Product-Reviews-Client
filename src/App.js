import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await fetch(
					'https://product-reviews-backend.herokuapp.com/products'
				);
        const json = await res.json()
        console.log(json)
      } catch (err) {
        console.error(err)
      }
    }
    makeAPICall()
  }, [])
  
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
