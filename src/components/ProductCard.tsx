import type { IProduct as ProductcardProps } from '../types'
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({product}: {product: ProductcardProps}) => {
    const handleAddToCart = () => {
        alert("added to cart")
    }
  return (
    <article className="group relative">
        <img src={product.images[0]} alt={product.title} className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {product.title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.category.name}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>

        <div className="mt-4 relative z-10">
            <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-sm font-medium py-2.5 px-4 rounded-md transition-colors duration-150 cursor-pointer shadow-sm"
            >
            <ShoppingCart className="w-4 h-4" />
            Add to My Cart
            </button>
        </div>
      </article>
  )
}

export default ProductCard