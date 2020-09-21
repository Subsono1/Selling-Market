import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetail(props) {
  const [product, setProduct] = useState(null)
  const { currentUser, products, handleDelete } = props 
  const { id } = useParams()
  

  useEffect(() => {
    if (products.length) {
      const oneProduct = products.find((product) => product.id === Number(id));
      setProduct(oneProduct)
    }
  }, [products, id])

  return (
    <div>
      <h1>You are looking at:</h1>
      {
        product &&

      <div>
          <h2>{product.title}</h2>
          <h3>${product.price}</h3>
          <div>
        <img src={product.img_url} alt={product.title} />
            <p>{product.description}</p>
          </div>
          { currentUser.id === product.user_id &&
          <>
          <Link to={`/products/${product.id}/edit`}>Update</Link>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </>
      }
        </div>
      }
    </div>
  )
}

export default ProductDetail
