import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types";

interface CartItem {
    product: Product;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    cartTotal: number;
    cartCount: number;
}

const cartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cart, setCart] = useState<CartItem[]>(() => {

    const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
        
    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.product.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { product, quantity: 1 }];
        });
    }

    const removeFromCart = (productId: string) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.product.id === productId);
            if(!existingItem) return prevCart;
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    return prevCart.map(item =>
                        item.product.id === productId
                            ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                return prevCart.filter(item => item.product.id !== productId);
            }
        }
        });
    }

    const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <cartContext.Provider value={{ cartItems: cart, addToCart, removeFromCart, cartTotal, cartCount }}>
            {children}
        </cartContext.Provider>
    );
};

export const useCart = () => useContext(cartContext);
