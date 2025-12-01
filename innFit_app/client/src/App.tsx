import React, { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { GetStarted } from "@/pages/GetStarted";
import IntroductionScreen1 from "@/pages/IntroductionScreen1";
import IntroductionScreen2 from "@/pages/IntroductionScreen2";
import IntroductionScreen3 from "@/pages/IntroductionScreen3";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import ForgotPassword from "@/pages/ForgotPassword";
import ScanningPage from "@/pages/ScanningPage";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import TrendingProducts from "@/pages/TrendingProducts";
import Profile from "@/pages/Profile";
import PlaceOrder from "@/pages/PlaceOrder";
import Shipping from "@/pages/Shipping";
import Success from "@/pages/Success";
import Settings from "@/pages/Settings";
import SearchPage from "@/pages/SearchPage";
import Wishlist from "@/pages/Wishlist";
import ProductDetail from "@/pages/ProductDetail";
import Cart from "@/pages/Cart";
import CategoryProducts from "@/pages/CategoryProducts";
import Orders from "@/pages/Orders";
import { WishlistProvider } from "@/context/WishlistContext";
import { ProfileProvider } from "@/context/ProfileContext";
import { CartProvider, useCart } from "@/context/CartContext";
import { OrderProvider } from "@/context/OrderContext";
import { NotificationProvider } from "@/context/NotificationContext";
import { products } from "@/data/products";

type Screen =
  | "getStarted"
  | "intro1"
  | "intro2"
  | "intro3"
  | "signIn"
  | "signUp"
  | "forgotPassword"
  | "scanning"
  | "home"
  | "shop"
  | "trending"
  | "productDetail"
  | "profile"
  | "placeOrder"
  | "shipping"
  | "success"
  | "settings"
  | "search"
  | "wishlist"
  | "cart"
  | "categoryProducts"
  | "orders";

function AppNavigator() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("getStarted");
  const [selectedProductId, setSelectedProductId] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [navigationHistory, setNavigationHistory] = useState<Screen[]>([]);

  const navigate = (screen: Screen) => {
    setNavigationHistory(prev => [...prev, currentScreen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (navigationHistory.length > 0) {
      const previous = navigationHistory[navigationHistory.length - 1];
      setNavigationHistory(prev => prev.slice(0, -1));
      setCurrentScreen(previous);
    } else {
      setCurrentScreen("home");
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "getStarted":
        return <GetStarted onGetStarted={() => navigate("intro1")} />;
      
      case "intro1":
        return (
          <IntroductionScreen1
            onNext={() => navigate("intro2")}
            onSkip={() => navigate("signIn")}
          />
        );
      
      case "intro2":
        return (
          <IntroductionScreen2
            onNext={() => navigate("intro3")}
            onBack={goBack}
            onSkip={() => navigate("signIn")}
          />
        );
      
      case "intro3":
        return (
          <IntroductionScreen3
            onNext={() => navigate("signIn")}
            onBack={goBack}
            onSkip={() => navigate("signIn")}
          />
        );
      
      case "signIn":
        return (
          <SignIn
            onLogin={() => navigate("home")}
            onSignUp={() => navigate("signUp")}
            onForgotPassword={() => navigate("forgotPassword")}
            onBack={goBack}
          />
        );
      
      case "signUp":
        return (
          <SignUp
            onCreateAccount={() => navigate("scanning")}
            onLogin={() => navigate("signIn")}
            onBack={goBack}
          />
        );
      
      case "forgotPassword":
        return (
          <ForgotPassword
            onSubmit={() => navigate("getStarted")}
            onBack={goBack}
          />
        );
      
      case "scanning":
        return (
          <ScanningPage
            onComplete={() => navigate("home")}
            onBack={goBack}
          />
        );
      
      case "home":
        return (
          <HomePage
            onNavigateToGetStarted={() => navigate("getStarted")}
            onNavigateToShop={() => navigate("shop")}
            onNavigateToProfile={() => navigate("profile")}
            onNavigateToTrendingProducts={() => navigate("trending")}
            onNavigateToPlaceOrder={() => navigate("placeOrder")}
            onNavigateToSearch={() => navigate("search")}
            onNavigateToWishlist={() => navigate("wishlist")}
            onNavigateToSettings={() => navigate("settings")}
            onNavigateToCart={() => navigate("cart")}
            onNavigateToCategory={(category) => {
              setSelectedCategory(category);
              navigate("categoryProducts");
            }}
            onSelectProduct={(productId) => {
              setSelectedProductId(productId);
              navigate("productDetail");
            }}
          />
        );
      
      case "shop":
        return (
          <ShopPage
            onBack={goBack}
            onSelectProduct={() => navigate("placeOrder")}
            onGoHome={() => navigate("home")}
          />
        );
      
      case "trending":
        return (
          <TrendingProducts
            onBack={goBack}
            onSelectProduct={(productId) => {
              setSelectedProductId(productId);
              navigate("productDetail");
            }}
          />
        );
      
      case "productDetail": {
        const product = products.find(p => p.id === selectedProductId);
        return product ? (
          <ProductDetail
            product={product}
            onBack={goBack}
            onProceedToShipping={() => navigate("placeOrder")}
          />
        ) : (
          <TrendingProducts onBack={() => setCurrentScreen("home")} />
        );
      }
      
      case "profile":
        return (
          <Profile
            onBack={goBack}
            onLogout={() => navigate("signIn")}
            onEditProfile={() => {}}
            onViewOrders={() => navigate("orders")}
          />
        );
      
      case "placeOrder":
        return (
          <PlaceOrder
            productId={selectedProductId}
            onBack={goBack}
            onProceedToCheckout={() => navigate("success")}
          />
        );
      
      case "shipping":
        return (
          <Shipping
            onBack={goBack}
            onPlaceOrder={() => navigate("success")}
          />
        );
      
      case "success":
        return (
          <Success
            onContinueShopping={() => navigate("home")}
            onViewOrders={() => navigate("profile")}
          />
        );
      
      case "settings":
        return <Settings onBack={goBack} onLogout={() => navigate("signIn")} />;
      
      case "search":
        return (
          <SearchPage
            onBack={goBack}
            onSelectProduct={(productId) => {
              setSelectedProductId(productId);
              navigate("productDetail");
            }}
          />
        );
      
      case "wishlist":
        return (
          <Wishlist
            onBack={goBack}
            onSelectProduct={(productId) => {
              setSelectedProductId(productId);
              navigate("productDetail");
            }}
          />
        );
      
      case "cart":
        return (
          <Cart
            onBack={goBack}
            onCheckout={() => navigate("shipping")}
          />
        );
      
      case "categoryProducts":
        return (
          <CategoryProducts
            category={selectedCategory}
            onBack={goBack}
            onSelectProduct={(productId) => {
              setSelectedProductId(productId);
              navigate("productDetail");
            }}
          />
        );
      
      case "orders":
        return (
          <Orders
            onBack={goBack}
            onSelectOrder={() => {}}
          />
        );
      
      default:
        return <GetStarted onGetStarted={() => navigate("intro1")} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderScreen()}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <NotificationProvider>
          <WishlistProvider>
            <ProfileProvider>
              <CartProvider>
                <OrderProvider>
                  <Toaster />
                  <AppNavigator />
                </OrderProvider>
              </CartProvider>
            </ProfileProvider>
          </WishlistProvider>
        </NotificationProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
