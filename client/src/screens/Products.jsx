import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

function Products(props) {
  const { products } = props
  
  return (
    <div className='products-page'>
      
      {products.map(product => (
        <div className='product-div'key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h2 className="product-title">{product.title}</h2>
            <img className="product-image" src={product.img_url}></img>


          </Link>
        </div>
      ))}


      
    </div>
  )
}

export default Products
