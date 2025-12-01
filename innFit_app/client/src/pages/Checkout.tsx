import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

interface CheckoutProps {
  onBack?: () => void;
  onPlaceOrder?: () => void;
}

export default function Checkout({ onBack, onPlaceOrder }: CheckoutProps) {
  const { items, getTotal } = useCart();
  const [selectedSize, setSelectedSize] = useState<Record<number, string>>({});
  const [selectedColor, setSelectedColor] = useState<Record<number, string>>({});
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["#000000", "#FF4B4B", "#4B9EFF", "#4BFF4B", "#FFB84B"];
  const sizeModifiers: Record<string, number> = { XS: -0.1, S: -0.05, M: 0, L: 0.1, XL: 0.15 };
  const colorModifiers: Record<string, number> = { "#000000": 0, "#FF4B4B": 5, "#4B9EFF": 0, "#4BFF4B": 0, "#FFB84B": 3 };

  if (!items || items.length === 0) {
    return (
      <main className="relative min-h-screen w-full flex flex-col bg-white safe-top safe-bottom">
        <header className="container-responsive pt-4 pb-4 flex items-center gap-4 border-b">
          <button
            onClick={onBack}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors active:scale-95"
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">Checkout</h1>
        </header>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-white safe-top safe-bottom">
      <header className="container-responsive pt-4 pb-4 flex items-center gap-4 border-b">
        <button
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors active:scale-95"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">Checkout</h1>
      </header>

      <div className="flex-1 overflow-y-auto pb-40">
        <div className="container-responsive py-6">
          <h2 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black mb-4">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => {
              const product = products.find(p => p.id === item.productId);
              if (!product) return null;
              
              const sizeModifier = sizeModifiers[item.selectedSize] || 0;
              const colorModifier = colorModifiers[item.selectedColor] || 0;
              const adjustedPrice = product.price * (1 + sizeModifier) + colorModifier;
              const itemTotal = adjustedPrice * item.quantity;

              return (
                <div key={`${item.productId}-${item.selectedSize}-${item.selectedColor}`} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex gap-4 mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-black">{product.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">Size: {item.selectedSize}</p>
                      <p className="text-xs text-gray-500">Color: <span style={{display: 'inline-block', width: '10px', height: '10px', borderRadius: '2px', backgroundColor: item.selectedColor, marginLeft: '4px'}}></span></p>
                      <p className="font-bold text-sm text-black mt-2">${itemTotal.toFixed(2)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-xs text-gray-500 mt-1">${adjustedPrice.toFixed(2)}/item</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black mb-4">Delivery Details</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border border-gray-300 rounded text-sm" />
              <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded text-sm" />
              <input type="tel" placeholder="Phone Number" className="w-full px-3 py-2 border border-gray-300 rounded text-sm" />
              <input type="text" placeholder="Address" className="w-full px-3 py-2 border border-gray-300 rounded text-sm" />
              <input type="text" placeholder="City" className="w-full px-3 py-2 border border-gray-300 rounded text-sm" />
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black mb-3">Payment Summary</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">${getTotal().toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium">$10.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Tax:</span>
                <span className="font-medium">${(getTotal() * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 pt-2 flex items-center justify-between">
                <span className="font-bold text-black">Total:</span>
                <span className="font-bold text-xl text-[#0088ff]">${(getTotal() + 10 + getTotal() * 0.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 safe-bottom">
        <button
          onClick={onPlaceOrder}
          className="w-full h-12 bg-[#0088ff] hover:bg-[#0077dd] text-white rounded-lg font-['Montserrat',Helvetica] font-semibold active:scale-95 transition-all"
        >
          Place Order - ${(getTotal() + 10 + getTotal() * 0.1).toFixed(2)}
        </button>
      </div>
    </main>
  );
}
