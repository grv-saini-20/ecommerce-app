import type { IProduct } from "../types"

const BASE_URL = 'https://api.escuelajs.co/api/v1'

export const fetchAllProducts = async():Promise<IProduct[]> => {
  const response = await fetch(`${BASE_URL}/products`)
  if(!response.ok) {
    throw new Error('Failed to fetch products')
  }
  const data = await response.json()
  return data
}

export const fetchProductById = async(id: string):Promise<IProduct> => {
    const response = await fetch(`${BASE_URL}/products/${id}`)
    if(!response.ok) {
        throw new Error('Failed to fetch product')
    }
    const data = await response.json()
    return data
}