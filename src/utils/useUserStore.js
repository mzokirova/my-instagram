// utils/useUserStore.js
import { create } from 'zustand';
import api from './axios';

const useUserStore = create((set) => ({
  users: [],

  getUsers: async () => {
    try {
      const response = await api.get('/users');
      set({ users: response.data });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
}));

export default useUserStore;
