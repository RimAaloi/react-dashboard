// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

export const signup = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);
    if (response.data.length > 0) {
      const user = response.data[0];
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};

export const isLoggedIn = () => {
  return !!localStorage.getItem('currentUser');
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};