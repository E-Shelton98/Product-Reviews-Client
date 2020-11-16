import React from 'react'

const DisplayProducts = (props) => {
    let productsList = ''
    console.log(props.products)
    
    const handleClick = (e) => {
        let thing = e.target.value
        console.log(thing)
        handleClick("hello")
    }
    
    if(props.products[0]){
        productsList = props.products.map(product => {
            return (
                <div id={product.name} >
                <img src={product.img} alt='' onClick={handleClick}/>
                </div>
            )
        })
    }

    return(
        <>
        <h1>Product List</h1>
        {productsList}
        </>
    )
}

export default DisplayProducts;