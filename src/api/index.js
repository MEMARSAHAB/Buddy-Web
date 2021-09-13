import axios from 'axios';

const API = axios.create({ baseURL: 'https://bbd-server.herokuapp.com' });

API.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem('persist:root')).token;
  console.log(token);
  config.headers.authorization = token ? `Bearer ${token}` : null;
  return config;
});

export const getcode = number => API.post('/getcode', { number });

export const verifycode = ({ number, code }) =>
  API.post('/verifycode', { number, code });

export const singup = ({ number, name, isverify }) =>
  API.post('/singup', { number, name, isverify });

export const fetchBank = ({ lat, lng }) =>
  API.get(`/search/bloodbank/within/${lat}/${lng}`);

export const fetchCamp = ({ lat, lng }) =>
  API.get(`/search/camp/${lat}/${lng}`);
