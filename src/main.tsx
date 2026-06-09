import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './pages/Products.tsx'
import ProductDetails from './pages/ProductDetails.tsx'
import { CartProvider } from './context/cartContext.tsx'
import Cart from './pages/Cart.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
