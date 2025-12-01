import React, { useState } from "react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useNotifications } from "@/context/NotificationContext";
import NotificationsPanel from "./NotificationsPanel";
import { products } from "@/data/products";

interface HomePageProps {
  onNavigateToGetStarted?: () => void;
  onNavigateToShop?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToTrendingProducts?: () => void;
  onNavigateToPlaceOrder?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToWishlist?: () => void;
  onNavigateToSettings?: () => void;
  onNavigateToCart?: () => void;
  onNavigateToCategory?: (category: string) => void;
  onSelectProduct?: (productId: number) => void;
}

export default function HomePage({
  onNavigateToGetStarted,
  onNavigateToShop,
  onNavigateToProfile,
  onNavigateToTrendingProducts,
  onNavigateToPlaceOrder,
  onNavigateToSearch,
  onNavigateToWishlist,
  onNavigateToSettings,
  onNavigateToCart,
  onNavigateToCategory,
  onSelectProduct,
}: HomePageProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { getItemCount } = useCart();
  const { unreadCount, addNotification } = useNotifications();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const cartCount = getItemCount();

  const categories = [
    { name: "Women", icon: "👗", category: "clothing" },
    { name: "Men", icon: "👔", category: "shoes" },
    { name: "Kids", icon: "🧒", category: "accessories" },
    { name: "Beauty", icon: "💄", category: "bags" },
    { name: "Electronics", icon: "⚡", category: "accessories" },
  ];

  const homeProducts = products.slice(0, 4);

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-[#f9f9f9] safe-top">
      <header className="container-responsive pt-4 pb-2 flex items-center justify-between">
        <button 
          onClick={onNavigateToProfile}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0088ff] to-[#0066cc] flex items-center justify-center text-white font-semibold"
        >
          U
        </button>
        <div className="font-['Montserrat',Helvetica] font-bold text-xl text-black">
          innFit
        </div>
        <button 
          onClick={() => setShowNotifications(true)}
          className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center relative hover:shadow-md transition-shadow active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.73 21a2 2 0 01-3.46 0" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {unreadCount}
            </span>
          )}
        </button>

        <NotificationsPanel isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
      </header>

      <div className="container-responsive py-4">
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#bbbbbb]" fill="none" viewBox="0 0 24 24">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search any Product.."
            onClick={onNavigateToSearch}
            className="w-full h-10 pl-12 pr-12 bg-white rounded-md shadow-sm font-['Montserrat',Helvetica] text-sm placeholder:text-[#bbbbbb] cursor-pointer hover:shadow-md active:scale-95 transition-all"
          />
          <button
            onClick={onNavigateToSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#bbbbbb] hover:text-[#0088ff] transition-colors"
          >
            <svg fill="none" viewBox="0 0 24 24">
              <path d="M3 4H21M3 12H21M3 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="container-responsive pb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">All Featured</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white rounded-md shadow-sm text-xs font-['Montserrat',Helvetica]">
              Sort
            </button>
            <button className="px-3 py-1 bg-white rounded-md shadow-sm text-xs font-['Montserrat',Helvetica]">
              Filter
            </button>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => onNavigateToCategory?.(cat.category)}
              className="flex flex-col items-center gap-2 min-w-[70px] active:scale-95 transition-transform"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl hover:shadow-md transition-shadow">
                {cat.icon}
              </div>
              <span className="text-xs font-['Montserrat',Helvetica] text-black">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="container-responsive pb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">Deal of the Day</h2>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#0088ff]">22h 55m 20s remaining</span>
          </div>
        </div>

        <div 
          onClick={onNavigateToTrendingProducts}
          className="w-full h-32 bg-gradient-to-r from-[#0088ff] to-[#00aaff] rounded-xl flex items-center justify-between p-6 cursor-pointer"
        >
          <div>
            <p className="text-white/80 text-sm">Special Offer</p>
            <p className="text-white font-bold text-2xl">50% OFF</p>
          </div>
          <div className="text-5xl">🛍️</div>
        </div>
      </div>

      <div className="container-responsive pb-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">Trending Products</h2>
          <button 
            onClick={onNavigateToTrendingProducts}
            className="text-sm text-[#0088ff]"
          >
            View all
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {homeProducts.map((product) => (
            <div 
              key={product.id} 
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-all active:scale-95"
            >
              <div className="aspect-square bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] flex items-center justify-center relative group overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                {hoveredProduct === product.id && (
                  <>
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
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct?.(product.id);
                      }}
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#0088ff] text-white rounded-lg text-xs font-semibold hover:bg-[#0077dd] active:scale-95 transition-all"
                    >
                      Quick View
                    </button>
                  </>
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

      {showToast && (
        <div className="fixed top-4 left-4 right-4 bg-black text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="font-['Montserrat',Helvetica] text-sm">{toastMessage}</p>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-100 safe-bottom mb-7">
        <div className="flex items-center justify-around h-16">
          <button className="flex flex-col items-center gap-1 text-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs">Home</span>
          </button>
          <button 
            onClick={onNavigateToWishlist}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-red-500 active:scale-95 transition-all"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs">Wishlist</span>
          </button>
          <button 
            onClick={onNavigateToCart}
            className="w-14 h-14 -mt-6 bg-[#0088ff] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0077dd] active:scale-95 transition-all"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="9" cy="21" r="1" stroke="white" strokeWidth="2"/>
              <circle cx="20" cy="21" r="1" stroke="white" strokeWidth="2"/>
              <path d="M1 1H5L7.68 14.39C7.77 14.88 8.02 15.32 8.38 15.64C8.74 15.97 9.2 16.15 9.68 16.15H19.4C19.88 16.15 20.34 15.97 20.7 15.64C21.06 15.32 21.31 14.88 21.4 14.39L23 6H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            onClick={onNavigateToSearch}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#0088ff] active:scale-95 transition-all"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-xs">Search</span>
          </button>
          <button 
            onClick={onNavigateToSettings}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#0088ff] active:scale-95 transition-all"
          >
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
