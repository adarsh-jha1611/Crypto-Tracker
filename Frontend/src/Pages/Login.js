import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/config';
import backgroundImage from '../components/banner2.jpg'; // Replace with the actual path to your image

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/login`, { email, password });
      const { token, role, data } = response.data;

      // Save the token and role to local storage or context
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userRole', role);

      // Redirect to a dashboard or another page
      history.push('/dashboard'); // Change this to your desired route
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center center', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <form onSubmit={handleSubmit} className="login__form" style={{ 
        background: '#F7931A', 
        borderRadius: '15px', 
        padding: '30px', 
        width: '40%' 
      }}>
        <h2 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '2rem' }}>Login</h2>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ marginBottom: '0.5rem' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: '0.5rem 1rem', 
              borderRadius: '5px', 
              border: 'none', 
              fontSize: '1rem', 
              color: '#F7931A' 
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ marginBottom: '0.5rem' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: '0.5rem 1rem', 
              borderRadius: '5px', 
              border: 'none', 
              fontSize: '1rem', 
              color: '#2D4055' 
            }}
          />
        </div>
        {errorMessage && <p style={{ color: '#fff', textAlign: 'center', marginBottom: '1rem' }}>{errorMessage}</p>}
        <button type="submit" className="auth__btn" style={{ 
          background: '#AF6000', 
          width: '100%', 
          color: '#fff', 
          fontSize: '0.9rem', 
          padding: '0.5rem', 
          borderRadius: '5px', 
          border: 'none',
          cursor:'pointer',

        }}>
          Login
        </button>
        <p style={{ fontSize: '0.9rem', color: '#fff', marginTop: '1.5rem', textAlign: 'center' }}>
          New here? <Link to="/register" style={{ color: '#2D4055', textDecoration: 'none', marginLeft: '5px', fontWeight: '500' }}>Create Account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
