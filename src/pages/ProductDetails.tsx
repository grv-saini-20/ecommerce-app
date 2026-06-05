import { useCallback, useEffect, useState } from "react";
import { fetchProductById } from "../services/productService";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Loader , ShoppingCart } from "lucide-react";
import { useCart } from "../context/cartContext";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {addToCart} = useCart();

  const { id } = useParams();

  const handleAddToCart = useCallback(() => {
        addToCart(product);
      }, [addToCart, product]);

  useEffect(() => {
    const loadProductDetails = async() => {
        if(!id) return;
        try {
            setLoading(true)
            const data = await fetchProductById(id)
            setProduct(data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }
    loadProductDetails()
  },[id])

  return (
    <>
    <header className="mb-4 flex items-center gap-4">
    <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer group"
        >
        Home
      </button>
      <ChevronLeft size={16} />
      <h1 className="text-base text-gray-900">Product Details</h1>
    </header>

      {loading && <div className="fixed top-[50%] left-[50%] flex justify-between items-center animate-spin"><Loader size={48}/></div>}
      {error && <p className="text-red-500 text-base">Error: Product not Found</p>}

      {product && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white p-6 md:p-8">
            <div className="w-full aspect-square">
            <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover object-center"
            />
            </div>

            <div className="flex flex-col justify-between">
            <div>
                <h1 className="mt-4 text-2xl md:text-3xl font-extrabold text-gray-900">
                {product.title}
                </h1>
                
                <p className="mt-3 text-3xl font-black text-gray-900">
                ${product.price}
                </p>

                <div className="mt-6 pt-6">
                <h3 className="text-sm font-semibold text-gray-500">Description</h3>
                <p className="mt-2 text-base text-gray-600">
                    {product.description}
                </p>
                </div>
            </div>

            <div className="mt-8 pt-6">
                <button
                    onClick={handleAddToCart}
                    className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-sm font-medium py-2.5 px-4 rounded-md transition-colors duration-150 cursor-pointer shadow-sm"
                    >
                    <ShoppingCart className="w-4 h-4" />
                    Add to My Cart
                </button>
            </div>
            </div>
            </div>
        </div>
      )}
    </>
  )
}

export default ProductDetails