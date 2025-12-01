import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

interface ShippingProps {
  onBack?: () => void;
  onPlaceOrder?: () => void;
}

export default function Shipping({ onBack, onPlaceOrder }: ShippingProps) {
  const { items, getTotal } = useCart();
  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [error, setError] = useState("");

  const isFormValid = 
    address.fullName.trim().length > 0 && 
    address.phone.trim().length > 0 && 
    address.street.trim().length > 0 && 
    address.city.trim().length > 0 && 
    address.state.trim().length > 0 && 
    address.zip.trim().length > 0;

  // Get cart items with product details
  const cartItems = items.map(item => {
    const product = products.find(p => p.id === item.productId);
    return {
      name: product?.name || "Unknown Product",
      price: item.pricePerItem * item.quantity,
      quantity: item.quantity,
      image: product?.image,
    };
  });

  const subtotal = getTotal();
  const shipping = 50;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-[#f9f9f9] safe-top">
      <header className="container-responsive pt-4 pb-2 flex items-center gap-4 bg-white">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">Checkout</h1>
      </header>

      <div className="flex-1 overflow-y-auto pb-40">
        <div className="container-responsive py-6">
          <div className="bg-white rounded-xl p-4 mb-6">
            <h2 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black mb-4">Shipping Address</h2>
            
            <div className="space-y-4">
              <div>
                <label className="font-['Montserrat',Helvetica] text-xs text-gray-600 mb-1 block">Full Name</label>
                <Input
                  placeholder="Enter your full name"
                  value={address.fullName}
                  onChange={(e) => setAddress({...address, fullName: e.target.value})}
                  className="h-12 bg-[#f5f5f5] border-transparent rounded-lg"
                />
              </div>
              <div>
                <label className="font-['Montserrat',Helvetica] text-xs text-gray-600 mb-1 block">Phone Number</label>
                <Input
                  placeholder="Enter your phone number"
                  value={address.phone}
                  onChange={(e) => setAddress({...address, phone: e.target.value})}
                  className="h-12 bg-[#f5f5f5] border-transparent rounded-lg"
                />
              </div>
              <div>
                <label className="font-['Montserrat',Helvetica] text-xs text-gray-600 mb-1 block">Street Address</label>
                <Input
                  placeholder="Enter your street address"
                  value={address.street}
                  onChange={(e) => setAddress({...address, street: e.target.value})}
                  className="h-12 bg-[#f5f5f5] border-transparent rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-['Montserrat',Helvetica] text-xs text-gray-600 mb-1 block">City</label>
                  <Input
                    placeholder="City"
                    value={address.city}
                    onChange={(e) => setAddress({...address, city: e.target.value})}
                    className="h-12 bg-[#f5f5f5] border-transparent rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-['Montserrat',Helvetica] text-xs text-gray-600 mb-1 block">State</label>
                  <Input
                    placeholder="State"
                    value={address.state}
                    onChange={(e) => setAddress({...address, state: e.target.value})}
                    className="h-12 bg-[#f5f5f5] border-transparent rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-['Montserrat',Helvetica] text-xs text-gray-600 mb-1 block">ZIP Code</label>
                <Input
                  placeholder="ZIP Code"
                  value={address.zip}
                  onChange={(e) => setAddress({...address, zip: e.target.value})}
                  className="h-12 bg-[#f5f5f5] border-transparent rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 mb-6">
            <h2 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black mb-4">Order Summary</h2>
            
            {cartItems.length === 0 ? (
              <p className="font-['Montserrat',Helvetica] text-sm text-gray-500 py-4">No items in cart</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 py-3 border-b border-gray-100">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  ) : (
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      👟
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="font-['Montserrat',Helvetica] font-medium text-sm text-black">{item.name}</p>
                    <p className="font-['Montserrat',Helvetica] text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-['Montserrat',Helvetica] font-medium text-sm text-black">${item.price.toFixed(2)}</p>
                </div>
              ))
            )}
          </div>

          <div className="bg-white rounded-xl p-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-['Montserrat',Helvetica] text-sm text-gray-600">Subtotal</span>
                <span className="font-['Montserrat',Helvetica] font-medium text-sm text-black">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-['Montserrat',Helvetica] text-sm text-gray-600">Shipping</span>
                <span className="font-['Montserrat',Helvetica] font-medium text-sm text-black">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-['Montserrat',Helvetica] text-sm text-gray-600">Tax (10%)</span>
                <span className="font-['Montserrat',Helvetica] font-medium text-sm text-black">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-100">
                <span className="font-['Montserrat',Helvetica] font-semibold text-black">Total</span>
                <span className="font-['Montserrat',Helvetica] font-bold text-lg text-[#0088ff]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 safe-bottom mb-7">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm mb-2">
            {error}
          </div>
        )}
        <Button
          onClick={() => {
            if (!isFormValid) {
              setError("Please fill in all shipping address fields");
              setTimeout(() => setError(""), 3000);
              return;
            }
            onPlaceOrder?.();
          }}
          disabled={!isFormValid}
          className={`w-full h-14 rounded-lg font-['Montserrat',Helvetica] font-semibold text-lg active:scale-95 transition-all ${
            isFormValid
              ? "bg-[#0088ff] hover:bg-[#0077dd] text-white"
              : "bg-gray-400 text-white cursor-not-allowed opacity-60"
          }`}
        >
          Proceed to Checkout - ${total.toFixed(2)}
        </Button>
      </div>
    </main>
  );
}
