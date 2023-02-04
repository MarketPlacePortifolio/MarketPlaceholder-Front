import api from './api';

export async function signUp(name, email, password) {
  const response = await api.post('/users', { name, email, password });
  return response.data;
}

export async function userUpdate(name, email, image) {
  const response = await api.update('/users', { name, email, image });
  return response.data;
}
