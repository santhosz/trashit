import "../../assets/styles/Register.css";
import React, { useState } from "react";
import registerImage from "../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        console.log('Submitting registration with:', { email, password });
  
        const response = await fetch('http://localhost:8080/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
  
        if (!response.ok) {
          const message = await response.text();
          console.error('Server responded with error:', message);
          alert(message);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        alert('Registration failed. Please try again later.');
      }
    } else {
      alert('Passwords do not match');
    }
  };
  

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit">Register</button>
          </form>
          <div className="register-links">
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>
        <div className="register-image">
          <img src={registerImage} alt="Register" />
        </div>
      </div>
    </div>
  );
};

export default Register;
