// src/pages/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
        <h2>Login</h2>
      <form onSubmit={handleLogin}>
      <img src="/assets/logo.png" alt="ENSET Logo" className="logo" />
   
        <div>
          <input
            type="email"
            placeholder="Login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">SIGN IN</button>
      </form>
      <p>
        New User? <a href="/signup">Click to sign up!!</a>
      </p>
    </div>
  );
};

export default Login;