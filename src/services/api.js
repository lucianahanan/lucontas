import axios from 'axios';

let currentUrl = (window.location.href === process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'https://lucontas-lucianahanan.vercel.app/');

if( window.location.href === 'http://localhost:3000/') {
  currentUrl = process.env.REACT_APP_API_URL;
}

console.log(process.env.REACT_APP_API_URL);
console.log(currentUrl);

export const api = axios.create({
// baseURL: 'http://localhost:3000/api',
// baseURL: process.env.REACT_APP_API_URL,
  baseURL: currentUrl,
  headers: {}
})