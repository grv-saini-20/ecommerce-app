import type { Category, Product } from "../types"

const BASE_URL = 'https://api.escuelajs.co/api/v1'

export const fetchAllProducts = async():Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products`)
  if(!response.ok) {
    throw new Error('Failed to fetch products')
  }
  const data = await response.json()
  return data
}

export const fetchProductById = async(id: string):Promise<Product> => {
    const response = await fetch(`${BASE_URL}/products/${id}`)
    if(!response.ok) {
        throw new Error('Failed to fetch product')
    }
    const data = await response.json()
    return data
}

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${BASE_URL}/categories`);
  if (!response.ok) throw new Error('Failed to fetch categories');
  return response.json();
};

export const fetchProductsByCategory = async (categoryId: number): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products/?categoryId=${categoryId}`);
  if (!response.ok) throw new Error('Failed to fetch filtered products');
  return response.json();
};