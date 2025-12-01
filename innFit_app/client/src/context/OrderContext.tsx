import React, { createContext, useContext, useState, useEffect } from "react";

export interface OrderItem {
  productId: number;
  productName: string;
  productImage: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  pricePerItem: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  date: string;
  timestamp: number;
  address: {
    fullName: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  status: "pending" | "shipped" | "delivered";
}

export interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  getOrders: () => Order[];
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("orders");
    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  const getOrders = () => orders;

  return (
    <OrderContext.Provider value={{ orders, addOrder, getOrders }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within OrderProvider");
  }
  return context;
}
