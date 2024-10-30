import { create } from 'zustand';
import api from './axios';
import { Bounce, toast } from 'react-toastify';



const useLoginStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,

  setUser: (userData) => {
    set({ user: userData });
    localStorage.setItem('user', JSON.stringify(userData));
  },

  logout: () => {
    set({ user: null });
    localStorage.removeItem('user');
  },

  // Register User
  registerUser: async (userData) => {
    try {
      const response = await api.post('/users', userData);
      set({ user: response.data });
      localStorage.setItem('user', JSON.stringify(response.data));
  
      console.log('User registered successfully:', response.data);
    } catch (error) {
        toast.error('Registration failed', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
      console.error('Registration failed:', error);
    }
  },

  // Login User
  loginUser: async (userData) => {
    try {
      const response = await api.get('/users');
      const users = response.data;
      const existingUser = users.find(
        (user) => user.email === userData.email && user.password === userData.password
      );

      if (existingUser) {
        set({ user: existingUser });
        localStorage.setItem('user', JSON.stringify(existingUser));
        toast.success('User logged in successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        console.log('User logged in successfully:', existingUser);
      } else {
        toast.error('Login failed: Invalid credentials', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        console.error('Login failed: Invalid credentials');
      }
    } catch (error) {
        toast.error('Login request failed:', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
      console.error('Login request failed:', error.response?.data || error.message);
    }
  },
}));

export default useLoginStore;
