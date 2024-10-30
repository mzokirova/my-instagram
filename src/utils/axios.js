import axios from "axios";


const api = axios.create({
  baseURL: 'https://crudcrud.com/api/f974e95c5d7f4e8a83a35212838ca74a',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
