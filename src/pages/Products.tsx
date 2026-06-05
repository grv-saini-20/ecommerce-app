import { useEffect, useState } from "react";
import { fetchAllProducts } from "../services/productService";
import { Loader } from "lucide-react";
import ProductCard from "../components/ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const loadInitialData = async() => {
            try {
                setLoading(true);
                const data  = await fetchAllProducts();
                setProducts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        loadInitialData();
    },[])

  return (
    <>
      <h1>Products</h1>
      {loading && <Loader />}
      {error && <p>Error loading products</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product}/>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Products