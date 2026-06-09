import { Outlet, redirect, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { useCart } from './context/cartContext';
import { useEffect } from 'react';

function App() {
  const {cartCount} = useCart();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      redirect("/products");
    }
  }, [location.pathname, redirect]);

  return (
    <>
    <Header  cartCount={cartCount}/>
    <section className="container mx-auto p-4">
      <Outlet/>
    </section>
    </>
  )
}

export default App
