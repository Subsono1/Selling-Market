import { Switch, Route, useHistory  } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import './App.css';
import BuySell from './screens/BuySell';
import Layout from './layout/Layout';
import Register from './screens/Register'
import Login from './screens/Login';

import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';

import Container from './container/Container';







function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();
// all auth functionalities should be listed here in the app since my layout is being called here. 
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      // history.push("/");
    };
    handleVerify();
  }, []);

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/buy-sell')
    }

    const registerSubmit = async (registerData) => {
      const userData = await registerUser(registerData);
      setCurrentUser(userData);
      history.push('/');
    }

    const handleLogout = () => {
      localStorage.removeItem('authToken');
      removeToken();
      setCurrentUser(null);
      history.push('/');
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
        
        <Route exact path='/register'>
          <Register
            registerSubmit={registerSubmit}/>

        </Route>
        <Route exact path='/buy-sell'>
         <BuySell />

        </Route>

       

        <Route  path='/'>
          <Container
            currentUser={currentUser}/>
        </Route>


        </Switch>
        
      </div>
      

  );
}

export default App;
