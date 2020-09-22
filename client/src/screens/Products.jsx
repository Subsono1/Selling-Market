import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

function Products(props) {
  const { products } = props
  
  
  return (
    <>
    <h3 className="products-text">FIND YOUR PRODUCTS HERE! THE BEST PLACE ONLINE</h3>
    <div className='products-page'>
      
      {products.map(product => (
        <div className='product-div'key={product.id}>
          <Link className="product-title" to={`/products/${product.id}`}>
            
            <h2 className="product-title">{product.title}</h2>
            <img className="product-image" src={product.img_url}></img>


          </Link>
        </div>
        
      ))}


      
      </div>
      </>
  )
}

export default Products
