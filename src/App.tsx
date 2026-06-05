import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { useCart } from './context/cartContext';

function App() {
  const {cartCount} = useCart();
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
