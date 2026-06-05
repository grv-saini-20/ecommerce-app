import React, { useCallback } from "react";
import { useCart } from "../context/cartContext";

function CartItem({ item, quantity }: {item : any, quantity: number}) {
  const { removeFromCart } = useCart();

  const handleRemove = useCallback(() => {
    removeFromCart(item.id);
  }, [removeFromCart, item.id]);

  return (
    <article className="flex justify-between items-center border p-4 rounded">
      <div className="flex gap-2">
        <div className="flex gap-2">
            <img 
                src={item.images[0]} 
                alt={item.title} 
                className="w-20 h-20 object-cover rounded bg-gray-800 shrink-0"
                />
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500">
                ${item.price} × {quantity}
                </p>
            </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
            onClick={handleRemove}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-medium py-2.5 px-4 rounded-md transition-colors duration-150 cursor-pointer shadow-sm"
            >
            Remove Item
            </button>
      </div>
    </article>
  );
}

export default React.memo(CartItem);