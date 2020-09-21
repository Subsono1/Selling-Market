import React from 'react'
import { useHistory } from 'react-router-dom'
import './BuySell.css'

function BuySell() {
  const history = useHistory()

  const handleBuy = () => {
    history.push('/products')
  }

  const handleSell = () => {
    history.push('/sell')
  }

  return (
    <div className='buttons-div'>
      <h1>Welcome, what would you like to do today...</h1>
      <div className='buy-sell_div'>
      <div className='button-div'>
        <button onClick={handleBuy} className='action-button'>BUY</button>

      </div>
     

      <div className='button-div'>
      <button onClick={handleSell} className='action-button'>SELL</button>
        
      </div>
      
      </div>
      </div>
  )
}

export default BuySell
