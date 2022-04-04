import axios from 'axios';

let currentUrl = process.env.REACT_APP_API_URL;

if( window.location.href !== 'http://localhost:3000/' && window.location.href !== 'https://lucontas.vercel.app/' ) {
  currentUrl = 'https://lucontas-lucianahanan.vercel.app/api';
}

console.log(process.env.REACT_APP_API_URL);
console.log(currentUrl);

export const api = axios.create({
// baseURL: 'http://localhost:3000/api',
// baseURL: process.env.REACT_APP_API_URL,
  baseURL: currentUrl,
  headers: {}
})