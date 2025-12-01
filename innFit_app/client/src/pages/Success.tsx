import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNotifications } from "@/context/NotificationContext";
import { useCart } from "@/context/CartContext";
import { useOrders } from "@/context/OrderContext";
import { products } from "@/data/products";

interface SuccessProps {
  onContinueShopping?: () => void;
  onViewOrders?: () => void;
  shippingAddress?: any;
}

export default function Success({ onContinueShopping, onViewOrders, shippingAddress }: SuccessProps) {
  const { addNotification } = useNotifications();
  const { items, getTotal, clearCart } = useCart();
  const { addOrder } = useOrders();

  // Generate order ID
  const orderId = `#ORD-${Date.now()}`;
  const orderTotal = getTotal();
  const subtotal = orderTotal;
  const shipping = 50;
  const tax = subtotal * 0.1;

  // Add notification and save order when page loads
  useEffect(() => {
    if (items.length > 0) {
      // Create order items with product details
      const orderItems = items.map(item => {
        const product = products.find(p => p.id === item.productId);
        return {
          productId: item.productId,
          productName: product?.name || "Unknown Product",
          productImage: product?.image || "",
          quantity: item.quantity,
          selectedSize: item.selectedSize,
          selectedColor: item.selectedColor,
          pricePerItem: item.pricePerItem,
          totalPrice: item.pricePerItem * item.quantity,
        };
      });

      // Save order to context
      addOrder({
        id: orderId,
        items: orderItems,
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: subtotal + shipping + tax,
        date: new Date().toLocaleDateString(),
        timestamp: Date.now(),
        address: shippingAddress || {
          fullName: "Customer",
          phone: "N/A",
          street: "N/A",
          city: "N/A",
          state: "N/A",
          zip: "N/A",
        },
        status: "pending",
      });

      addNotification({
        type: "purchase",
        title: "Order Placed Successfully!",
        message: `Your order ${orderId} totaling $${(subtotal + shipping + tax).toFixed(2)} has been confirmed. You will receive it within 3-5 business days.`,
        icon: "✅",
      });
    }
  }, []);

  const handleContinueShopping = () => {
    clearCart();
    onContinueShopping?.();
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white safe-top safe-bottom">
      <div className="flex flex-col items-center justify-center px-6 text-center">
        <div className="w-32 h-32 bg-[#e8f5e9] rounded-full flex items-center justify-center mb-8 animate-scale-in">
          <div className="w-20 h-20 bg-[#4caf50] rounded-full flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <h1 className="font-['Montserrat',Helvetica] font-bold text-2xl text-black mb-4">
          Order Placed Successfully!
        </h1>
        
        <p className="font-['Montserrat',Helvetica] text-sm text-gray-500 mb-2 max-w-xs">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        <p className="font-['Montserrat',Helvetica] text-sm text-gray-400 mb-2">
          Order ID: {orderId}
        </p>

        <p className="font-['Montserrat',Helvetica] text-lg font-bold text-[#0088ff] mb-8">
          Total: ${orderTotal.toFixed(2)}
        </p>

        <p className="font-['Montserrat',Helvetica] text-xs text-gray-400 mb-8 max-w-xs">
          Expected delivery in 3-5 business days
        </p>

        <div className="w-full max-w-xs space-y-3">
          <Button
            onClick={handleContinueShopping}
            className="w-full h-14 bg-[#0088ff] hover:bg-[#0077dd] rounded-lg font-['Montserrat',Helvetica] font-semibold text-lg text-white active:scale-95 transition-all"
          >
            Continue Shopping
          </Button>
          
          <Button
            onClick={onViewOrders}
            variant="outline"
            className="w-full h-14 border-[#0088ff] text-[#0088ff] rounded-lg font-['Montserrat',Helvetica] font-semibold text-lg hover:bg-blue-50 active:scale-95 transition-all"
          >
            View Orders
          </Button>
        </div>
      </div>
    </main>
  );
}
