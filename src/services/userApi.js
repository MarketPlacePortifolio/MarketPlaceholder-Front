import api from './api';

export async function signUp(name, email, password) {
  const response = await api.post('/users', { name, email, password });
  return response.data;
}

export async function userUpdate({ token, body }) {
  const response = await api.put('/users', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
