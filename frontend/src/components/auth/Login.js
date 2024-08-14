import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/Login.css";
import loginImage from "../../assets/images/login.jpg";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin') {
      setIsLoggedIn(true);
      navigate('/admin-dashboard'); // Redirect to admin dashboard
      return;
    }
    
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        setIsLoggedIn(true);
        navigate('/profile');
      } else {
        const message = await response.text();
        alert(message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src={loginImage} alt="Login" />
        </div>
        <div className="login-form">
          <h2>Login</h2>
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
            <button type="submit">Login</button>
          </form>
          <div className="login-links">
            <Link to="/forgotpassword">Forgot Password?</Link>
            <Link to="/register">Create an Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
