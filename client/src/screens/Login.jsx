
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


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
      <form onSubmit={(e) => {
        e.preventDefault()
        loginSubmit(formInfo)
      }}className='login-form'>
    
      
        
        <input type='text' name='username' value={username} placeholder='Please Enter User Name' onChange={handleChange}/>
        
        <input type='password' name='password' value={password} placeholder='Please Enter Your Password' onChange={handleChange}/>
        
        <button>Submit</button>
        <br />
       
        <Link to='/register' className='register-link'>Register</Link>

        </form>
      </div>
  )
}

export default Login
