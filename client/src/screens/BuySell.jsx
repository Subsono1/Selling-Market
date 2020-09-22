import React from 'react'
import { useHistory } from 'react-router-dom'
import './BuySell.css'
import styled, { keyframes } from 'styled-components';
import { lightSpeedIn} from 'react-animations';
 
const speeIn = keyframes`${lightSpeedIn}`;
 
const LightDiv = styled.div`
  animation: 2s ${speeIn};
`;

function BuySell() {
  const history = useHistory()

  const handleBuy = () => {
    history.push('/products')
  }

  const handleSell = () => {
    history.push('/sell')
  }

  return (
    <>
    <LightDiv className="welcome-div">
      <h1 className="welcome">Welcome, what would you like to do today...</h1>
      </LightDiv>
    <div className='buttons-div'>
      
      <div className='buy-sell_div'>
      <div className='button-div'>
        <button onClick={handleBuy} className='action-button'>BUY</button>

      </div>
     

      <div className='button-div'>
      <button onClick={handleSell} className='action-button'>SELL</button>
        
      </div>
      
      </div>
      </div>
      </>
  )
}

export default BuySell
