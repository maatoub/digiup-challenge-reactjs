
import axios from "axios";

export const ProductApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const GetProduct = (productId) => {
  return ProductApi.get(`/products/${productId}`);
};

export const GetProductSize = (size) => {
  return ProductApi.get(`/products?limit=${size}`);
};
