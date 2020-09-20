import React, { useState } from 'react'
import './Sell.css'

function Sell(props) {
  const [formInfo, setFormInfo] = useState({
    title:"",
    price:"",
    img_url:"",
    description:""
  })

  const { title, price, img_url, description } = formInfo
  const { createSubmit } = props

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  
  return (
    <div className='sell-div'>
      <h1>List Your Product Here</h1>

      <div className="sell-div_form">
        <form className="form" onSubmit={(e) => {
          e.preventDefault()
          createSubmit(formInfo)
        }}>
          <div className="sell-box-div_short">
            

            <input className="sell-input_box" onChange={handleChange} value={title} name="title" placeholder='TITLE' ></input>
          </div>

          <div className="sell-box-div_short">
            

            <input className="sell-input_box" onChange={handleChange} value={price} name="price"placeholder='PRICE'></input>
          </div>
          <div className="sell-box_div">
            
            <input className="long-input_box" onChange={handleChange} value={img_url} name="img_url"placeholder='IMAGE (url)'></input>
          </div>
          <div className="sell-box_div">
            
            <textarea className="description" onChange={handleChange} value={description} name="description" placeholder='WRITE A BRIEF DESCRIPTION OF YOUR ITEM'></textarea>
          </div>
          <div className="sell-button_div">
            <button className="sell-button" >List it!</button>
          </div>
         
        </form>
      </div>

      


    </div>
  )
}

export default Sell
