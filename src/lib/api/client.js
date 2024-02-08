import axios from 'axios';

const client = axios.create();

export const test = () => axios.get(`http://localhost:3000/users`);

export default client;
