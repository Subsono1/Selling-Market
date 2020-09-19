import React from 'react'
import { useHistory } from 'react-router-dom'
import './BuySell.css'

function BuySell() {
  const history = useHistory()

  const handleBuy = () => {
    history.push('/buy')
  }

  const handleSell = () => {
    history.push('/sell')
  }

  return (
    <>
      <h1>Welcome, what would you like to do today...</h1>
      <div className='buy-sell_div'>
      <div className='buttonl-div'>
        <button onClick={handleBuy} className='action-button'>BUY</button>

      </div>
     

      <div className='button-div'>
      <button onClick={handleSell} className='action-button'>SELL</button>
        
      </div>
      
      </div>
      </>
  )
}

export default BuySell
