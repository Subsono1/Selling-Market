import React from 'react'
import {useHistory} from 'react-router-dom'

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
      <div>
        <button onClick={handleBuy}>BUY</button>

      </div>
     

      <div>
      <button onClick={handleSell}>SELL</button>
        
      </div>
      
    </>
  )
}

export default BuySell
