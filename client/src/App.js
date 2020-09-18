import { Switch, Route, useHistory  } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import './App.css';
import Layout from './layout/Layout';
import Login from './screens/Login'

import {loginUser, registerUser, verifyUser, removeToken } from './services/auth'




function App() {
  const [currentUser, setCurrentUser] = useState(null)

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
    

  }

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    removeToken()
    setCurrentUser(null)
  }
  
  return (
    <div>
    <Layout
    currentUser={currentUser}
      handleLogout={handleLogout}
      >
        </Layout> 

    
      <Switch>
        <Route path='/'>
          <Login loginSubmit={loginSubmit}/>
          </Route>

        </Switch>
        
      </div>
      

  );
}

export default App;
