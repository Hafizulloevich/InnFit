import React from "react";

interface ShopPageProps {
  onBack?: () => void;
  onSelectProduct?: () => void;
  onGoHome?: () => void;
}

export default function ShopPage({ onBack, onSelectProduct, onGoHome }: ShopPageProps) {
  const products = [
    { id: 1, name: "Black Winter...", price: "$870", image: "🧥" },
    { id: 2, name: "Mens Starry", price: "$789", image: "👔" },
    { id: 3, name: "Nike Jordan", price: "$1200", image: "👟" },
    { id: 4, name: "Summer Dress", price: "$456", image: "👗" },
    { id: 5, name: "Leather Jacket", price: "$999", image: "🧥" },
    { id: 6, name: "Casual Sneakers", price: "$350", image: "👟" },
  ];

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
        <div className="flex-1 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#bbbbbb]" fill="none" viewBox="0 0 24 24">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search any Product.."
            className="w-full h-9 pl-10 pr-4 bg-[#f5f5f5] rounded-lg font-['Montserrat',Helvetica] text-sm placeholder:text-[#bbbbbb]"
          />
        </div>
      </header>

      <div className="container-responsive py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-['Montserrat',Helvetica] font-semibold text-xl text-black">All Products</h1>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-[#f5f5f5] rounded-md text-xs font-['Montserrat',Helvetica]">
              Sort
            </button>
            <button className="px-3 py-1 bg-[#f5f5f5] rounded-md text-xs font-['Montserrat',Helvetica]">
              Filter
            </button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 -mx-4 px-4">
          {["All", "Women", "Men", "Kids", "Beauty"].map((cat, i) => (
            <button 
              key={cat}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                i === 0 ? "bg-[#0088ff] text-white" : "bg-[#f5f5f5] text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 container-responsive pb-24 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={onSelectProduct}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] flex items-center justify-center relative">
                <span className="text-5xl">{product.image}</span>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="p-3">
                <h3 className="font-['Montserrat',Helvetica] font-medium text-sm text-black truncate">{product.name}</h3>
                <span className="font-['Montserrat',Helvetica] font-bold text-sm text-black">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-100 safe-bottom mb-7">
        <div className="flex items-center justify-around h-16">
          <button onClick={onGoHome} className="flex flex-col items-center gap-1 text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs">Wishlist</span>
          </button>
          <button className="w-14 h-14 -mt-6 bg-[#0088ff] rounded-full flex items-center justify-center shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="9" cy="21" r="1" stroke="white" strokeWidth="2"/>
              <circle cx="20" cy="21" r="1" stroke="white" strokeWidth="2"/>
              <path d="M1 1H5L7.68 14.39C7.77 14.88 8.02 15.32 8.38 15.64C8.74 15.97 9.2 16.15 9.68 16.15H19.4C19.88 16.15 20.34 15.97 20.7 15.64C21.06 15.32 21.31 14.88 21.4 14.39L23 6H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-xs">Search</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </nav>
    </main>
  );
}
