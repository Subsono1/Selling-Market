
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';


function Login(props) {
  const {loginSubmit} = props
  const [formInfo, setFormInfo] = useState({
    username: '',
    password: ''
  })

  const { username, password } = formInfo

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormInfo(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  return (
    
    <div className='login-div'>
      <h2>Welcome! Please Login or Register</h2>
      <br/>
      <form onSubmit={(e) => {
        e.preventDefault()
        loginSubmit(formInfo)
      }}className='login-form'>
    
      
        
        <input className="login-input" type='text' name='username' value={username} placeholder='Please Enter User Name' onChange={handleChange}/>
        
        <input className="login-input" type='password' name='password' value={password} placeholder='Please Enter Your Password' onChange={handleChange}/>
        <br/>
        {/* <Button className="login-button" variant="contained"
        color="primary"
        // className={classes.button}
          SendIcon={<SendIcon />}
          onClick={loginSubmit}>Submit</Button>  */}
        <button className="login-button">Submit</button>
        
      
      
        <br />
       
        <Link to='/register' className='register-link'>Register</Link>

        </form>
      </div>
  )
}

export default Login
