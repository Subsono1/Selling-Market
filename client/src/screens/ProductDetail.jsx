import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useStateValue } from '../components/StateProvider'
import { fadeInUp, fadeInDown } from 'react-animations'
import styled, { keyframes } from 'styled-components';


import './ProductDetail.css'


const fadeInAnimation = keyframes`${fadeInDown}`;
 
const DescriptionDiv = styled.div`
  animation: 2.5s ${fadeInAnimation};
`;

function ProductDetail(props) {
  const [product, setProduct] = useState(null)
  const {img_url, title,  price, currentUser, products, handleDelete } = props 
  const { id } = useParams()
  

  useEffect(() => {
    if (products.length) {
      const oneProduct = products.find((product) => product.id === Number(id));
      setProduct(oneProduct)
    }
  }, [products, id])

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    
    dispatch({
      type: "ADD_TO_BASKET",
      item: [{
        id: id,
        title: title,
        image: img_url,
        price: price
       
      }],
    });
  };

  return (
    <div className="detail-div">
      <div>
        <h1 className="h1">You are looking at:</h1>
        </div>
      {
        product &&

      <div >
          <div className='detail-title'>
          <h2 className="title">{product.title}</h2>
          </div>
          <div className="detail-price">
            <h2 className="price">Price:${product.price}</h2>
            </div>
          <div className="detail-img_div">
            <img className="detail-image" src={product.img_url} alt={product.title} />
            <DescriptionDiv className="description-div">
              <p className="description-text">Descritpion:</p>
              <h4 className="detail-description" >{product.description}</h4>
              </DescriptionDiv>
          </div>
          { currentUser.id === product.user_id &&
            <>
            <div className="link-button">
          <Link className="detail-update"to={`/products/${product.id}/edit`}>Update</Link>
              <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
          </>
      }
        </div>
      }
      <div className="addto-div">
        <button className="addto" onClick={addToBasket}>Checkout!</button>
        </div>
    </div>
  )
}

export default ProductDetail
