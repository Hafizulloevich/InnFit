import React, { useState } from "react";
import { Product } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import ImageCarousel from "./ImageCarousel";

interface ProductDetailProps {
  product: Product;
  onBack?: () => void;
  onProceedToShipping?: () => void;
}

export default function ProductDetail({ product, onBack, onProceedToShipping }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [showCarousel, setShowCarousel] = useState(false);
  const [scaleValue, setScaleValue] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const sizeModifiers: Record<string, number> = { XS: -0.1, S: -0.05, M: 0, L: 0.1, XL: 0.15 };
  const colorModifiers: Record<string, number> = { "#000000": 0, "#FF4B4B": 5, "#4B9EFF": 0, "#4BFF4B": 0, "#FFB84B": 3 };

  const sizeModifier = sizeModifiers[selectedSize] || 0;
  const colorModifier = colorModifiers[selectedColor] || 0;
  const pricePerItem = product.price * (1 + sizeModifier) + colorModifier;

  const handlePointerEnter = () => setScaleValue(1.04);
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTranslateX((x - 0.5) * 20);
    setTranslateY((y - 0.5) * 20);
  };
  const handlePointerLeave = () => {
    setScaleValue(1);
    setTranslateX(0);
    setTranslateY(0);
  };

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["#000000", "#FF4B4B", "#4B9EFF", "#4BFF4B", "#FFB84B"];

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-white safe-top">
      <header className="container-responsive pt-4 pb-2 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors active:scale-95"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex gap-2">
          <button 
            onClick={() => {
              if (isInWishlist(product.id)) {
                removeFromWishlist(product.id);
                setToastMessage(`${product.name} removed from wishlist`);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 2000);
              } else {
                addToWishlist(product.id);
                setToastMessage(`${product.name} added to wishlist ♥`);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 2000);
              }
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-95 ${
              isInWishlist(product.id) ? "bg-red-100" : "bg-gray-100"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? "#ff4b4b" : "none"}>
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke={isInWishlist(product.id) ? "#ff4b4b" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pb-32">
        <div
          onClick={() => setShowCarousel(true)}
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="w-full aspect-square bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] flex items-center justify-center overflow-hidden relative group cursor-pointer"
          style={{
            touchAction: "none"
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300"
            style={{
              transform: `scale(${scaleValue}) translate(${translateX}px, ${translateY}px)`
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
            Tap to enlarge
          </div>
        </div>

        <ImageCarousel product={product} isOpen={showCarousel} onClose={() => setShowCarousel(false)} />

        <div className="container-responsive py-6">
          {/* Image Preview Section */}
          <div className="mb-6 flex justify-center">
            <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="font-['Montserrat',Helvetica] font-bold text-xl text-black">{product.name}</h1>
              <p className="font-['Montserrat',Helvetica] text-sm text-gray-500">{product.desc}</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="font-['Montserrat',Helvetica] font-medium text-sm">{product.rating}</span>
              <span className="font-['Montserrat',Helvetica] text-xs text-gray-400">({product.reviews})</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="font-['Montserrat',Helvetica] font-bold text-2xl text-black">${pricePerItem.toFixed(2)}</p>
              <p className="font-['Montserrat',Helvetica] text-sm text-green-600 font-semibold">{product.fit}% Fit Match</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 active:scale-95 transition-all"
              >
                -
              </button>
              <span className="font-['Montserrat',Helvetica] font-medium w-8 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-[#0088ff] text-white flex items-center justify-center hover:bg-[#0077dd] active:scale-95 transition-all"
              >
                +
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-['Montserrat',Helvetica] font-semibold text-sm text-black mb-3">Size</h3>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-['Montserrat',Helvetica] font-medium text-sm transition-all active:scale-95 ${
                    selectedSize === size
                      ? "bg-[#0088ff] text-white"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-['Montserrat',Helvetica] font-semibold text-sm text-black mb-3">Color</h3>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor === color ? "border-[#0088ff] scale-110" : "border-transparent hover:scale-105"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-['Montserrat',Helvetica] font-semibold text-sm text-black mb-2">Description</h3>
            <p className="font-['Montserrat',Helvetica] text-sm text-gray-500 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed top-4 left-4 right-4 bg-black text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="font-['Montserrat',Helvetica] text-sm">{toastMessage}</p>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 safe-bottom mb-7">
        <div className="flex gap-4">
          <button
            onClick={() => {
              addToCart(product.id, quantity, selectedSize, selectedColor, pricePerItem);
              setToastMessage(`${quantity}x ${product.name} added to cart 🛒`);
              setShowToast(true);
              setTimeout(() => setShowToast(false), 2000);
              setQuantity(1);
            }}
            className="flex-1 h-14 bg-[#0088ff] hover:bg-[#0077dd] rounded-lg font-['Montserrat',Helvetica] font-semibold text-lg text-white active:scale-95 transition-all"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              addToCart(product.id, quantity, selectedSize, selectedColor, pricePerItem);
              onProceedToShipping?.();
            }}
            className="flex-1 h-14 border-2 border-[#0088ff] text-[#0088ff] rounded-lg font-['Montserrat',Helvetica] font-semibold text-lg hover:bg-blue-50 active:scale-95 transition-all"
          >
            Buy Now - ${(pricePerItem * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </main>
  );
}
