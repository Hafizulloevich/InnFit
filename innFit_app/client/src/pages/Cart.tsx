import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

interface CartProps {
  onBack?: () => void;
  onCheckout?: () => void;
}

export default function Cart({ onBack, onCheckout }: CartProps) {
  const { items, removeFromCart, updateQuantity, getTotal } = useCart();
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState(false);

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-white safe-top safe-bottom">
      {showToast && (
        <div className="fixed top-4 left-4 right-4 bg-black text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="font-['Montserrat',Helvetica] text-sm">{toastMessage}</p>
        </div>
      )}

      <header className="container-responsive pt-4 pb-4 flex items-center gap-4 border-b">
        <button
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors active:scale-95"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">Cart</h1>
      </header>

      <div className="flex-1 overflow-y-auto pb-32">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96 gap-4">
            <div className="text-6xl">🛒</div>
            <p className="text-gray-500 text-center">Your cart is empty</p>
          </div>
        ) : (
          <div className="container-responsive py-6 space-y-4">
            {items.map((item) => {
              const product = products.find(p => p.id === item.productId);
              if (!product) return null;
              const uniqueKey = `${item.productId}-${item.selectedSize}-${item.selectedColor}`;
              return (
                <div key={uniqueKey} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{product.name}</h3>
                    <p className="text-xs text-gray-500">
                      Size: {item.selectedSize} | Color: <span style={{display: 'inline-block', width: '12px', height: '12px', borderRadius: '2px', backgroundColor: item.selectedColor, marginLeft: '4px'}}></span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Price per item: ${item.pricePerItem.toFixed(2)}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-bold text-sm">${(item.pricePerItem * item.quantity).toFixed(2)}</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            updateQuantity(item.productId, item.quantity - 1, item.selectedSize, item.selectedColor);
                            setToastMessage(`${product.name} quantity decreased`);
                            setShowToast(true);
                            setTimeout(() => setShowToast(false), 1500);
                          }}
                          className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs hover:bg-gray-100 active:scale-95"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-medium">{item.quantity}</span>
                        <button
                          onClick={() => {
                            updateQuantity(item.productId, item.quantity + 1, item.selectedSize, item.selectedColor);
                            setToastMessage(`${product.name} quantity increased`);
                            setShowToast(true);
                            setTimeout(() => setShowToast(false), 1500);
                          }}
                          className="w-6 h-6 rounded-full bg-[#0088ff] text-white flex items-center justify-center text-xs hover:bg-[#0077dd] active:scale-95"
                        >
                          +
                        </button>
                        <button
                          onClick={() => {
                            removeFromCart(item.productId, item.selectedSize, item.selectedColor);
                            setToastMessage(`${product.name} removed from cart`);
                            setShowToast(true);
                            setTimeout(() => setShowToast(false), 2000);
                          }}
                          className="ml-2 text-red-500 text-xs font-semibold hover:opacity-70 active:scale-95"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 safe-bottom mb-7">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-xl">${getTotal().toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full h-12 bg-[#0088ff] hover:bg-[#0077dd] text-white rounded-lg font-['Montserrat',Helvetica] font-semibold active:scale-95 transition-all"
          >
            Proceed to Checkout - ${getTotal().toFixed(2)}
          </button>
        </div>
      )}
    </main>
  );
}
