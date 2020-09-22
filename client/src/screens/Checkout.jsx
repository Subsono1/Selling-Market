import React from "react";
import "./Checkout.css";
import Button from '@material-ui/core/Button';



function Checkout(props) {
  const { orders, products } = props;
  return (
    <div>
      {orders.map((order) => (
        <React.Fragment>
          <div className="order-div">
            <h2 className="order-title">Your Name and Shipping Address:</h2>
            <p className="username">
              {order.user.username}
              <br />
              {order.user.address}
            </p>
          </div>
        </React.Fragment>
      ))}
      <div className="card-div">

      <div className="card-image">
        <img
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/1_pza0ul.png"
          className="credit-card"
          alt="visa"
        />
        <img
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/2_a7yimq.png"
          className="credit-card"
          alt="hk"
        />
        <img
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/14_q0evfg.png"
          className="credit-card"
          alt="hj"
        />
        <img
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/22_cjqquj.png"
          className="credit-card"
          alt="jh"
        />
        <img
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/5_ydtq4z.png"
          className="credit-card"
          alt="jh"
        />
        </div>
        
      <div>
        <form classNmae="card-form">
          <input className="card-input" placeholder="NAME ON CARD" />
          <input className="card-input" placeholder="CARD NUMBER" />
          <input className="card-input" placeholder="EXPIRATION DATE (MM/YY)" />
          <input className="card-input" placeholder="CVC" />
          <br />
          <Button className="pay" variant="contained" color="primary">Pay Now</Button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
