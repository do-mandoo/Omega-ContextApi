import axios from 'axios';

export const client = axios.create({ baseURL: 'http://localhost:5001/api' });

// export const posts = ({ title }) => {
//   client.post('/api/posts', { title });
// };
