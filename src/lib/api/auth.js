import client from './client';

// 로그인
export const login = ({ email, password }) =>
  client.post('/users/login', { email, password });

// 회원가입
export const signup = ({ email, name, password }) =>
  client.post('/users', { email, name, password });

// 상태확인
export const check = () => client.get('/users');

export const logout = () => client.post('/users/logout');
