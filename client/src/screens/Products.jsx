import React from 'react'
import { Link } from 'react-router-dom'

function Products(props) {
  const { currentUser, products } = props
  
  return (
    <div>
      <h1>THIS ARE THE PRODUCTS</h1>
      {products.map(product => (
        <React.Fragment key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h2>{product.title}</h2>
            <img src={product.img_url}></img>


          </Link>
        </React.Fragment>
      ))}


      
    </div>
  )
}

export default Products
