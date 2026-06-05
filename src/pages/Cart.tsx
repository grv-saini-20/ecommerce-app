import CartItem from "../components/CartItem";
import { useCart } from "../context/cartContext";

function Cart() {
  const { cartItems, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <CartItem key={item.product.id} item={item.product} quantity={item.quantity} />
        ))}
      </div>

      <div className="mt-10 border-t pt-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Total: ${cartTotal.toFixed(2)}
        </h2>

        <button className="bg-black text-white px-6 py-2 rounded hover:opacity-90">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;