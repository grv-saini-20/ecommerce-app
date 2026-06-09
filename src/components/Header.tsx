import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';


const Header = ({ cartCount = 0 }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold text-sky-600">
          E-Commerce
        </Link>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/products" className="hover:text-sky-600 transition">
            Home
          </Link>
        </nav>

        <div className="flex gap-3">
        

        <Link to="/cart" className="relative">
          <ShoppingCart className="text-2xl text-gray-700 hover:text-sky-600 transition" />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-sky-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;