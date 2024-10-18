import React, { useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { UserContext } from './UserContext';
import { useContext } from 'react';
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { updateUser } = useContext(UserContext);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    axios.post('http://localhost:8080/login/User', formData)

      .then(response => {
        setMessage(response.data);
        if(response.data==="Logged in successfully"){
          updateUser({
            email:formData.email
            
          });
          navigate('/Menu');
        }
        setError('');
        console.log('Data submitted successfully:', response.data);
      })
      .catch(error => {
        setMessage('');
        setError('Error submitting data. Please try again.');
        console.error('Error submitting data:', error);
      });

      
  };

  return (
    <>
      <div className="login">
        <div className="head2">
          LOGIN <span id='h'>HERE</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div  id='email' >
          <input 
            type="email" 
            placeholder="Enter your email here" 
           
            name="email" 
            value={formData.email} 
            onChange={handleChange}
          /></div><br />
          <div id='password' >
          <input 
            type="password" 
            placeholder="Enter your password here" 
           
            name='password' 
            value={formData.password} 
            onChange={handleChange}
          /></div>
          <br/>
          <div id='subbtn'>
          <button type='submit' >Login</button></div>
        </form>
        {message && <p>{message}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p id='loginp'>New User? <Link to="/register">Register here</Link></p>
      </div>

     
    </>
  );
}

export default Login;

