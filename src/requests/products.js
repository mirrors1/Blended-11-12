import axios from 'axios';
const baseURL = 'https://dummyjson.com';
const allProductsURL = '/products';

export async function getAllProducts(url = `${baseURL}${allProductsURL}`) {
  const response = await axios.get(url);
  console.log(response.data.products);

  return response.data.products;
}

export async function searchProduct(id) {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  return response.data;
}
