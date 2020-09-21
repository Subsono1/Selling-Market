import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header(props) {
  const {currentUser} = props
  return (
    <header>
      <nav>
        <Link to="/buy-sell" className="brand">Vending-Market</Link>
        {
        currentUser ?
          <div>
        <p> {currentUser.username} </p>
        <button onClick ={props.handleLogout}>Logout</button>

      </div> :
       <Link to='/'className="link">Login/Register</Link> 
        }
        <Link to="/orders" className="link">Orders</Link>
        {/* <Link to='/product-edit'className='link'>Edit</Link> */}
       <Link to="/basket"> <ShoppingBasketIcon className="basket" >
          
        </ShoppingBasketIcon> </Link>
        
        

      </nav>

      
    </header>
  )
}

export default Header
