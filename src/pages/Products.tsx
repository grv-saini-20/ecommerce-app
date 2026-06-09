import { useEffect, useState } from "react";
import { fetchAllProducts, fetchCategories, fetchProductsByCategory } from "../services/productService";
import { Loader } from "lucide-react";
import ProductCard from "../components/ProductCard";
import type { Category, Product } from "../types";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
      setSelectedCategory(Number(localStorage.getItem("categoryId")));
    }, []);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const categoryData = await fetchCategories();
                setCategories(categoryData);

            } catch (err) {
                console.error("Failed to fetch categories", err);
            }
        };
        loadCategories();
    }, []);

    useEffect(() => {
        const loadInitialData = async() => {
            try {
                setLoading(true);
                setError(null);
                let data: Product[] = [];
                if(selectedCategory === null) {
                  data  = await fetchAllProducts();
                  setProducts(data);
                } else {
                  data = await fetchProductsByCategory(selectedCategory);
                  setProducts(data);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        loadInitialData();
    },[selectedCategory])

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="flex flex-wrap gap-2 mb-8 items-center">
        <span className="text-xs font-bold uppercase text-gray-400 tracking-wider mr-2">Filter By:</span>
        <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all cursor-pointer ${
                selectedCategory === null
                    ? "bg-sky-600 border-sky-600 text-white shadow-sm"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
        >
            All Products
        </button>

        {categories.map((category) => (
            <button
                key={category.id}
                onClick={() => {setSelectedCategory(category.id), localStorage.setItem("categoryId", category.id.toString()), navigate(`/products?categoryId=${category.id}`)}}
                className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all cursor-pointer ${
                    selectedCategory === category.id
                        ? "bg-sky-600 border-sky-600 text-white shadow-sm"
                        : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
            >
                {category.name}
            </button>
        ))}
    </div>
      {loading && <div className="fixed top-[50%] left-[50%] flex justify-between items-center animate-spin"><Loader size={48}/></div>}
      {error && <p>Error loading products</p>}
      {!loading && !error && (<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product}/>
          </li>
        ))}
      </ul>)}
    </>
  )
}

export default Products