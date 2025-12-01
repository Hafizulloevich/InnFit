import React, { useState } from "react";
import { products } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import { useParallaxImage } from "@/hooks/useParallaxImage";

interface TrendingProductsProps {
  onBack?: () => void;
  onSelectProduct?: (productId: number) => void;
}

export default function TrendingProducts({ onBack, onSelectProduct }: TrendingProductsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const parallaxImages: Record<number, ReturnType<typeof useParallaxImage>> = {};
  products.forEach(p => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    parallaxImages[p.id] = useParallaxImage();
  });

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-white safe-top">
      <header className="container-responsive pt-4 pb-2 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">Trending Products</h1>
      </header>

      <div className="container-responsive py-4">
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#bbbbbb]" fill="none" viewBox="0 0 24 24">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-12 pr-4 bg-white border border-[#e0e0e0] rounded-lg font-['Montserrat',Helvetica] text-sm placeholder:text-[#bbbbbb] focus:outline-none focus:border-[#0088ff]"
          />
        </div>
      </div>

      <div className="container-responsive pb-4">
        <div className="flex items-center justify-between mb-4">
          <p className="font-['Montserrat',Helvetica] text-lg text-black">
            <span className="font-bold">{filtered.length}</span> Items
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-[#f5f5f5] rounded-md text-xs font-['Montserrat',Helvetica] flex items-center gap-1">
              Sort
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="px-3 py-1 bg-[#f5f5f5] rounded-md text-xs font-['Montserrat',Helvetica] flex items-center gap-1">
              Filter
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed top-4 left-4 right-4 bg-black text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="font-['Montserrat',Helvetica] text-sm">{toastMessage}</p>
        </div>
      )}

      <div className="flex-1 container-responsive pb-8 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {filtered.map((product) => (
            <div 
              key={product.id}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => onSelectProduct?.(product.id)}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-all active:scale-95"
            >
              <div className="aspect-square bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] flex items-center justify-center relative overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                {hoveredProduct === product.id && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
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
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-50 transition-all active:scale-95"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? "#ff4b4b" : "none"}>
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke={isInWishlist(product.id) ? "#ff4b4b" : "#888"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-['Montserrat',Helvetica] font-medium text-sm text-black truncate">{product.name}</h3>
                <p className="font-['Montserrat',Helvetica] text-xs text-gray-500 truncate">{product.desc}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-['Montserrat',Helvetica] font-bold text-sm text-black">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-xs text-gray-500">{product.rating}</span>
                    <span className="text-xs font-semibold text-green-600">{product.fit}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center h-96 gap-4">
            <div className="text-6xl">🔍</div>
            <p className="text-gray-500 text-center">No products found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </main>
  );
}
