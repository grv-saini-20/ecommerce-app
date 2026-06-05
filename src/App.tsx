import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
    <Header  cartCount={0}/>
    <section className="container mx-auto p-4">
      <Outlet/>
    </section>
    </>
  )
}

export default App
