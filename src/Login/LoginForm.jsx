import React, { useState } from 'react';
import { login } from '../api';
import './Login.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

   
      const data = await login(email, password).then((data)=>
      {
        console.log(data);
        localStorage.setItem('accessToken', data.access_token);
        localStorage.setItem('refreshToken', data.refresh_token);
        history('/listleaves');

      });
      
    
  };

  return (
    
    <div className='login-container'>
       
    <form className='login-form'>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control"  onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary" onClick ={handleLogin}>Login</button>
    <Link to = "/register">
        <button type="submit" className="gulshan btn btn-primary  " >Register</button>
    </Link>
  </form>
  </div>
  );
}

export default LoginForm;
