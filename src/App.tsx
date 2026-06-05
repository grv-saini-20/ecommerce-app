import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <section className="container mx-auto p-4">
      <Outlet/>
    </section>
    </>
  )
}

export default App
