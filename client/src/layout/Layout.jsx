import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'


function Layout(props) {
  return (
    <div>
      <Header currentUser={props.currentUser}
        handleLogout={props.handleLogout} />
      
      
      <Footer />
    </div>
  )
}

export default Layout