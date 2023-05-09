import React, { useState } from 'react';
import { register } from '../api';
import { useNavigate } from "react-router";
import './RegisterForm.css'
function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const history = useNavigate();

  
  const handleRegister = async(e)=> {
    console.log('1 callleddddd')
    e.preventDefault();

    // const dataaa = register(email,password,name)
      // console.log('wwwww',dataaa)
        await register(email, password, name).then((data)=> {
          console.log('2',data)
         console.log(data);
         localStorage.setItem("loggedIn", JSON.stringify(data.access_token));
         console.log(localStorage.getItem('loggedIn'));
         // console.log(localStorage.getItem('accessToken'));
         localStorage.setItem('refreshToken', JSON.stringify(data.refresh_token));
          history('/listleaves');
       
      });
      
    
  };

  return (
     
    <div className='register-container'>
    <form  className ='register-form' >
      
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <button type="submit" onClick={handleRegister}>Register</button>
    </form>
    </div>
  );
}

export default RegisterForm;
