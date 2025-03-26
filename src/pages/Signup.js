// src/pages/Signup.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/authService';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup({ email, name, password });
      navigate('/login');
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <div className="signup-container">
        <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <button type="submit">SIGN UP</button>
      </form>
      <p>
        Already registered? <a href="/login">Click to sign in!!</a>
      </p>
    </div>
  );
};

export default Signup;