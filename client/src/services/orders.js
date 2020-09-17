import api from './api-config'

export const getAllOrders = async () => {
  const resp = await api.get('/orders');
  return resp.data;
} 