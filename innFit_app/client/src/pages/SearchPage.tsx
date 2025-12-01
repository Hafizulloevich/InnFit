import React, { useState } from "react";
import { products } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";

interface SearchPageProps {
  onBack?: () => void;
  onSelectProduct?: (productId: number) => void;
}

export default function SearchPage({ onBack, onSelectProduct }: SearchPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"price-low" | "price-high" | "rating">("price-low");
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: 5000,
  });
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  let results = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filters.category === "all" || p.category === filters.category;
    const matchesPrice = p.price <= filters.priceRange;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort results
  if (sortBy === "price-low") results.sort((a, b) => a.price - b.price);
  if (sortBy === "price-high") results.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") results.sort((a, b) => b.rating - a.rating);

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-[#f9f9f9] safe-top safe-bottom animate-fade-in">
      <header className="container-responsive pt-4 pb-4 flex items-center gap-2 bg-white border-b">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors active:scale-95"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex-1 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#bbbbbb]" fill="none" viewBox="0 0 24 24">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 bg-white border border-[#e0e0e0] rounded-lg font-['Montserrat',Helvetica] text-sm"
          />
        </div>
      </header>

      <div className="container-responsive py-4 flex gap-2 overflow-x-auto">
        <button 
          onClick={() => setSortBy("price-low")}
          className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all active:scale-95 ${
            sortBy === "price-low" ? "bg-[#0088ff] text-white" : "bg-white text-black border border-[#e0e0e0]"
          }`}
        >
          Price: Low to High
        </button>
        <button 
          onClick={() => setSortBy("price-high")}
          className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all active:scale-95 ${
            sortBy === "price-high" ? "bg-[#0088ff] text-white" : "bg-white text-black border border-[#e0e0e0]"
          }`}
        >
          Price: High to Low
        </button>
        <button 
          onClick={() => setSortBy("rating")}
          className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all active:scale-95 ${
            sortBy === "rating" ? "bg-[#0088ff] text-white" : "bg-white text-black border border-[#e0e0e0]"
          }`}
        >
          Top Rated
        </button>
      </div>

      <div className="container-responsive py-2 flex gap-2 flex-wrap">
        {(["all", "shoes", "clothing", "bags", "accessories"] as const).map(cat => (
          <button 
            key={cat}
            onClick={() => setFilters(prev => ({ ...prev, category: cat }))}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all active:scale-95 ${
              filters.category === cat ? "bg-[#0088ff] text-white" : "bg-white text-black border border-[#e0e0e0]"
            }`}
          >
            {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="container-responsive py-4">
        <label className="text-xs font-semibold">Max Price: ${filters.priceRange}</label>
        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          value={filters.priceRange}
          onChange={(e) => setFilters(prev => ({ ...prev, priceRange: parseInt(e.target.value) }))}
          className="w-full mt-2"
        />
      </div>

      {showToast && (
        <div className="fixed top-4 left-4 right-4 bg-black text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="font-['Montserrat',Helvetica] text-sm">{toastMessage}</p>
        </div>
      )}

      <div className="flex-1 container-responsive pb-24 overflow-y-auto">
        <p className="text-xs text-gray-500 mb-4">Found {results.length} results</p>
        <div className="grid grid-cols-2 gap-4">
          {results.map((product) => (
            <div 
              key={product.id} 
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => onSelectProduct?.(product.id)}
              className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-all active:scale-95"
            >
              <div className="aspect-square bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] flex items-center justify-center relative overflow-hidden">
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
                    className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-all active:scale-95"
                  >
                    <span className={isInWishlist(product.id) ? "text-red-500 text-lg" : "text-gray-400 text-lg"}>♥</span>
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
                    <span className="text-xs font-semibold text-green-600 ml-1">{product.fit}% fit</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
