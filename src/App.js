import React, {useState, useEffect} from 'react'
import DisplayProducts from './components/DisplayProducts'
import './App.css';

function App() {
  const [productData, setProductData] = useState([])


  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await fetch(
					'https://product-reviews-backend.herokuapp.com/products'
				);
        const json = await res.json()
        setProductData(json)
      } catch (err) {
        console.error(err)
      }
    }
    makeAPICall()
  }, [])
  
  const handleClick = () => {
    
  }
  
  console.log(productData)
  return (
    <div className="App">
      <DisplayProducts products={productData} handleClickFromApp={handleClick}/>
    </div>
  );
}

export default App;
