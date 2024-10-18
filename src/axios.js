// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.10:8080', // Adjust to your backend URL
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

export default instance;
