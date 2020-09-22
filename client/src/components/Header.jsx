import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header(props) {
  const { currentUser } = props
  const [{ basket }] = useStateValue();
  console.log(basket)
  return (
    <header>
      <nav>
        <Link to="/buy-sell" className="brand">Vending-Market</Link>
        {
        currentUser ?
          <div className="current-user-div">
        <p className="current-user"> {currentUser.username} </p>
        <button  className="logout" onClick ={props.handleLogout}>Logout</button>

            </div> :
            <>
              <Link to='/' className="link-login">Login</Link> 
              <p className="divider">|</p>
              <Link to='/register' className="link-register">Register</Link> 
              </>
        }
        {/* <Link to="/orders" className="link">Orders</Link> */}
        {/* <Link to='/product-edit'className='link'>Edit</Link> */}
        
        <Link to="/checkout" className="basket-link">
          <div className="basket-div">
            <ShoppingBasketIcon className=" basket" /><span className=" basketCount">{basket?.length}</span>
       
           </div>
        </Link>
        
        

      </nav>

      
    </header>
  )
}

export default Header
