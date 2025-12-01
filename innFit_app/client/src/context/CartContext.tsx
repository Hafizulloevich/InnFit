import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  productId: number;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  pricePerItem: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (productId: number, quantity: number, size: string, color: string, pricePerItem: number) => void;
  removeFromCart: (productId: number, size?: string, color?: string) => void;
  updateQuantity: (productId: number, quantity: number, size?: string, color?: string) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (productId: number, quantity: number, size: string, color: string, pricePerItem: number) => {
    setItems(prev => {
      const existing = prev.find(item => item.productId === productId && item.selectedSize === size && item.selectedColor === color);
      if (existing) {
        return prev.map(item =>
          item.productId === productId && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { productId, quantity, selectedSize: size, selectedColor: color, pricePerItem }];
    });
  };

  const removeFromCart = (productId: number, size?: string, color?: string) => {
    setItems(prev => prev.filter(item => 
      !(item.productId === productId && (!size || item.selectedSize === size) && (!color || item.selectedColor === color))
    ));
  };

  const updateQuantity = (productId: number, quantity: number, size?: string, color?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
    } else {
      setItems(prev => prev.map(item => 
        item.productId === productId && (!size || item.selectedSize === size) && (!color || item.selectedColor === color)
          ? { ...item, quantity } 
          : item
      ));
    }
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + (item.pricePerItem * item.quantity), 0);
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, getTotal, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
