import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";
import './Register.css'

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const FadeDiv = styled.section`
  animation: 3s ${fadeInLeftAnimation};
`;

function Register(props) {
  const [formInfo, setFormInfo] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const { username, email, password, address } = formInfo;
  const { registerSubmit } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h2 className="please-register">Please Register To Get In</h2>

      <FadeDiv className='register-div'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            registerSubmit(formInfo);
          }}
        className='register-form'>
          <input className='register-form_input'
            type="text"
            name="username"
            value={username}
            placeholder="Enter Your Username"
            onChange={handleChange}
          />
          <input className='register-form_input'
            type="text"
            name="email"
            value={email}
            placeholder="Your E-mail"
            onChange={handleChange}
          />
          <input className='register-form_input'
            type="password"
            name="password"
            value={password}
            placeholder="Make Your Password"
            onChange={handleChange}
          />
          <input className='register-form_input'
            type="text"
            name="address"
            value={address}
            placeholder="Enter Your Address"
            onChange={handleChange}
          />
          <br/>
          {/* <Button className="form-button" variant="contained" color="primary" className={classes.button}>Sign Up!</Button> */}
          <button className="form-button">Sign Up!</button>
        </form>
      </FadeDiv>
    </>
  );
}

export default Register;
