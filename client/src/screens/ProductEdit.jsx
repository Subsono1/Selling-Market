import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

function ProductEdit(props) {
  const [formInfo, setFormInfo] = useState({
    title:"",
    price:"",
    img_url:"",
    description:""
  })

  const { title, price, img_url, description } = formInfo
  const {id} = useParams()
  const { products, updateSubmit} = props
  
  useEffect(() => {
    const prefilForm = () => {
     products.find(product => product.id === Number(id))
      
      setFormInfo({ title, price, img_url, description })
    }
    if (products.length) {
      prefilForm();
    }
  }, [products])
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  
  return (
    <div>

      
<div className="sell-div_form">
        <form className="form" onSubmit={(e) => {
          e.preventDefault()
          updateSubmit(formInfo)
        }}>
          <div className="sell-box-div_short">
            

            <input className="sell-input_box" onChange={handleChange} value={title} name="title" placeholder='Edit TITLE' ></input>
          </div>

          <div className="sell-box-div_short">
            

            <input className="sell-input_box" onChange={handleChange} value={price} name="price"placeholder='Edit PRICE'></input>
          </div>
          <div className="sell-box_div">
            
            <input className="long-input_box" onChange={handleChange} value={img_url} name="img_url"placeholder='Edit IMAGE (url)'></input>
          </div>
          <div className="sell-box_div">
            
            <textarea className="description" onChange={handleChange} value={description} name="description" placeholder='Edit DESCRIPTION'></textarea>
          </div>
          <div className="sell-button_div">
            <button className="sell-button" >UPDATE!</button>
          </div>
        
         
        </form>
      </div>

    </div>
  )
}

export default ProductEdit
