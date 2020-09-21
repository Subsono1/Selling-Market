import { Switch, Route, useHistory  } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import './App.css';
import BuySell from './screens/BuySell';
import Layout from './layout/Layout';
import Registration from './screens/Register';
import Login from './screens/Login';

import {loginUser, registerUser, verifyUser, removeToken } from './services/auth'

import Container from './container/Container';







function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/buy-sell')
    

  }

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    removeToken()
    setCurrentUser(null)
    history.push('/')
  }
  
  return (
    <div>
    <Layout
    currentUser={currentUser}
      handleLogout={handleLogout}
      >
        </Layout> 

    
      <Switch>
        <Route exact path='/'>
          <Login loginSubmit={loginSubmit}/>
        </Route>
        
        <Route path='/register'>
          <Registration
            registerSubmit={registerSubmit}/>

        </Route>
        <Route exact path='/buy-sell'>
         <BuySell />

        </Route>

       

        <Route path='/'>
          <Container
            currentUser={currentUser}/>
        </Route>


        </Switch>
        
      </div>
      

  );
}

export default App;
