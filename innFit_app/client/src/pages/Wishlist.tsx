import React, { useState } from "react";
import { useWishlist } from "@/context/WishlistContext";
import { products } from "@/data/products";

interface WishlistProps {
  onBack?: () => void;
  onSelectProduct?: (productId: number) => void;
}

export default function Wishlist({ onBack, onSelectProduct }: WishlistProps) {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState(false);

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-[#f9f9f9] safe-top safe-bottom animate-fade-in">
      <header className="container-responsive pt-4 pb-4 flex items-center gap-4 border-b bg-white">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors active:scale-95"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">Wishlist ({wishlist.length})</h1>
      </header>

      {showToast && (
        <div className="fixed top-4 left-4 right-4 bg-black text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="font-['Montserrat',Helvetica] text-sm">{toastMessage}</p>
        </div>
      )}

      <div className="flex-1 container-responsive pb-8 overflow-y-auto">
        {wishlistProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96 gap-4">
            <div className="text-6xl">❤️</div>
            <p className="text-gray-500 text-center">No items in your wishlist yet</p>
          </div>
        ) : (
          <div className="py-4 grid grid-cols-2 gap-4">
            {wishlistProducts.map((product) => (
              <div 
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all active:scale-95"
              >
                <div className="aspect-square bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] flex items-center justify-center relative group overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  {hoveredProduct === product.id && (
                    <button 
                      onClick={() => {
                        removeFromWishlist(product.id);
                        setToastMessage(`${product.name} removed from wishlist`);
                        setShowToast(true);
                        setTimeout(() => setShowToast(false), 2000);
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-100 transition-opacity hover:bg-red-600 active:scale-95"
                    >
                      ✕
                    </button>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-['Montserrat',Helvetica] font-medium text-sm text-black">{product.name}</h3>
                  <p className="font-['Montserrat',Helvetica] text-xs text-gray-500 truncate">{product.desc}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-['Montserrat',Helvetica] font-medium text-sm text-black">${product.price}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-xs text-gray-500">{product.rating}</span>
                      <span className="text-xs font-semibold text-green-600">{product.fit}%</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => onSelectProduct?.(product.id)}
                    className="w-full mt-2 px-3 py-1 bg-[#0088ff] text-white rounded text-xs font-semibold hover:bg-[#0077dd] active:scale-95 transition-all"
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
