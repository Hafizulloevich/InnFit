import React, { useState } from "react";
import { products } from "@/data/products";

interface PlaceOrderProps {
  productId: number;
  onBack?: () => void;
  onProceedToCheckout?: () => void;
}

export default function PlaceOrder({ productId, onBack, onProceedToCheckout }: PlaceOrderProps) {
  const product = products.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");

  const isFormValid = fullName.trim().length > 0 && phone.trim().length > 0 && address.trim().length > 0 && city.trim().length > 0 && state.trim().length > 0 && zipCode.trim().length > 0;

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["#000000", "#FF4B4B", "#4B9EFF", "#4BFF4B", "#FFB84B"];
  const sizeModifiers: Record<string, number> = { XS: -0.1, S: -0.05, M: 0, L: 0.1, XL: 0.15 };
  const colorModifiers: Record<string, number> = { "#000000": 0, "#FF4B4B": 5, "#4B9EFF": 0, "#4BFF4B": 0, "#FFB84B": 3 };

  if (!product) {
    return (
      <main className="relative min-h-screen w-full flex flex-col bg-white safe-top safe-bottom">
        <header className="container-responsive pt-4 pb-4 flex items-center gap-4 border-b">
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">Order</h1>
        </header>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">Product not found</p>
        </div>
      </main>
    );
  }

  const sizeModifier = sizeModifiers[selectedSize] || 0;
  const colorModifier = colorModifiers[selectedColor] || 0;
  const pricePerItem = product.price * (1 + sizeModifier) + colorModifier;
  const subtotal = pricePerItem * quantity;
  const shipping = 50;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

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
        {/* Product Section */}
        <div className="w-full bg-gray-50 border-b">
          <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
          <div className="container-responsive py-4">
            <h2 className="font-['Montserrat',Helvetica] font-bold text-xl text-black mb-1">{product.name}</h2>
            <p className="font-['Montserrat',Helvetica] text-sm text-gray-600 mb-3">{product.desc}</p>
            <div className="flex items-center justify-between">
              <p className="font-bold text-2xl text-black">${pricePerItem.toFixed(2)}</p>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <span className="font-medium text-sm">{product.rating}</span>
                <span className="text-xs text-green-600 font-semibold ml-1">{product.fit}% fit</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container-responsive py-6 space-y-6">
          {/* Quantity Section */}
          <div>
            <h3 className="font-['Montserrat',Helvetica] font-semibold text-sm text-black mb-3">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 active:scale-95"
              >
                −
              </button>
              <span className="font-['Montserrat',Helvetica] font-semibold text-lg w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg bg-[#0088ff] text-white flex items-center justify-center hover:bg-[#0077dd] active:scale-95"
              >
                +
              </button>
            </div>
          </div>

          {/* Size Section */}
          <div>
            <h3 className="font-['Montserrat',Helvetica] font-semibold text-sm text-black mb-3">Size</h3>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center font-['Montserrat',Helvetica] font-semibold transition-all ${
                    selectedSize === size
                      ? "bg-[#0088ff] text-white shadow-lg"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Section */}
          <div>
            <h3 className="font-['Montserrat',Helvetica] font-semibold text-sm text-black mb-3">Color</h3>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-full border-2 transition-all ${
                    selectedColor === color ? "border-[#0088ff] shadow-lg scale-110" : "border-transparent"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Shipping Address Section */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-['Montserrat',Helvetica] font-semibold text-sm text-black mb-3">Shipping Address</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm font-['Montserrat',Helvetica] placeholder:text-gray-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm font-['Montserrat',Helvetica] placeholder:text-gray-400"
              />
              <input
                type="text"
                placeholder="Street Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm font-['Montserrat',Helvetica] placeholder:text-gray-400"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded text-sm font-['Montserrat',Helvetica] placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded text-sm font-['Montserrat',Helvetica] placeholder:text-gray-400"
                />
              </div>
              <input
                type="text"
                placeholder="ZIP Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm font-['Montserrat',Helvetica] placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="font-['Montserrat',Helvetica] font-semibold text-sm text-black mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Qty: {quantity}</span>
                <span className="font-medium">${(pricePerItem * quantity).toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Tax (10%):</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 pt-2 flex items-center justify-between">
                <span className="font-bold text-black">Total:</span>
                <span className="font-bold text-xl text-[#0088ff]">${total.toFixed(2)}</span>
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
        <button
          onClick={() => {
            if (!isFormValid) {
              setError("Please fill in all address fields");
              setTimeout(() => setError(""), 3000);
              return;
            }
            onProceedToCheckout?.();
          }}
          disabled={!isFormValid}
          className={`w-full h-12 rounded-lg font-['Montserrat',Helvetica] font-semibold active:scale-95 transition-all ${
            isFormValid
              ? "bg-[#0088ff] hover:bg-[#0077dd] text-white"
              : "bg-gray-400 text-white cursor-not-allowed opacity-60"
          }`}
        >
          Place Order
        </button>
      </div>
    </main>
  );
}
