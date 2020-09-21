import React from 'react'

function Orders(props) {

  const {orders, products} = props
  return (
    <div>
      <h1>THIS ARE THE Orders</h1>
      {orders.map(order => (
        <React.Fragment >
          
            <h2>{order.user.address}</h2>
            


          
        </React.Fragment>
      ))}
      
    </div>
  )
}

export default Orders
