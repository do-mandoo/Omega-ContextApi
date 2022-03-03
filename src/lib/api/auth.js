import axios from 'axios';

export const client = axios.create({ baseURL: 'http://localhost:5001/api' });

// // 로그인
// export const login = ({ username, password }) =>
//   client.post('/auth/login', { username, password });

// // 회원가입
// export const register = ({ username, nickname, password }) =>
//   client.post('/auth/register', { username, nickname, password });

// 로그인 상태 확인(보류)
