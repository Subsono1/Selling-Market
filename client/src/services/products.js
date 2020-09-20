  
import api from './api-config'

export const getAllProducts = async () => {
  const resp = await api.get('/products');
  return resp.data;
}

export const getOneProduct = async (id) => {
  const resp = await api.get(`/products/${id}`);
  return resp.data;
}

export const putProduct = async (id, formData) => {
  const resp = await api.put(`/products/${id}`, { product: formData })
  return resp.data;
}

export const postProduct = async (formData) => {
  const resp = await api.post('/products', { product: formData })
  return resp.data;
}

export const deleteProduct = async (id) => {
  const resp = await api.delete(`/products/${id}`)
  return resp.data;
}