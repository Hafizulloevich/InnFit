import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AppLoading from "./components/AppLoading";
import IntroductionScreen1 from "./components/IntroductionScreen1";
import IntroductionScreen2 from "./components/IntroductionScreen2";
import IntroductionScreen3 from "./components/IntroductionScreen3";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import GetStarted from "./components/GetStarted";
import ScanningPage from "./components/ScanningPage";
import HomePage from "./components/HomePage";
import TrendingProductsPage from "./components/TrendingProductsPage";
import ShopPage from "./components/ShopPage";
import ProfilePage from "./components/ProfilePage";
import PlaceOrderPage from "./components/PlaceOrderPage";
import ShippingPage from "./components/ShippingPage";
import SuccessfullyPage from "./components/SuccessfullyPage";

type Screen = "loading" | "intro1" | "intro2" | "intro3" | "signin" | "signup" | "home" | "forgotpassword" | "getstarted" | "scanning" | "shop" | "profile" | "trending" | "checkout" | "placeorder" | "shipping" | "successfully";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("loading");
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [profileReturnScreen, setProfileReturnScreen] = useState<Screen | null>(null);

  const navigateToScreen = (screen: Screen, isBack: boolean = false) => {
    setDirection(isBack ? -1 : 1);
    setCurrentScreen(screen);
  };

  const navigateToProfile = (returnTo: Screen) => {
    setProfileReturnScreen(returnTo);
    navigateToScreen("profile");
  };

  const handleProfileSave = () => {
    if (profileReturnScreen) {
      navigateToScreen(profileReturnScreen, true);
      setProfileReturnScreen(null);
    } else {
      navigateToScreen("trending");
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const fadeVariants = {
    enter: {
      opacity: 0,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1.05,
    },
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1.05,
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <AnimatePresence mode="wait" custom={direction}>
        {currentScreen === "loading" && (
          <motion.div
            key="loading"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <AppLoading onContinue={() => navigateToScreen("intro1")} />
          </motion.div>
        )}

        {currentScreen === "intro1" && (
          <motion.div
            key="intro1"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <IntroductionScreen1
              onNext={() => navigateToScreen("intro2")}
              onSkip={() => navigateToScreen("signin")}
            />
          </motion.div>
        )}

        {currentScreen === "intro2" && (
          <motion.div
            key="intro2"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <IntroductionScreen2
              onNext={() => navigateToScreen("intro3")}
              onBack={() => navigateToScreen("intro1", true)}
              onSkip={() => navigateToScreen("signin")}
            />
          </motion.div>
        )}

        {currentScreen === "intro3" && (
          <motion.div
            key="intro3"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <IntroductionScreen3
              onNext={() => navigateToScreen("signin")}
              onBack={() => navigateToScreen("intro2", true)}
              onSkip={() => navigateToScreen("signin")}
            />
          </motion.div>
        )}

        {currentScreen === "signin" && (
          <motion.div
            key="signin"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <SignIn
              onLogin={() => navigateToScreen("getstarted")}
              onSignUp={() => navigateToScreen("signup")}
              onForgotPassword={() => navigateToScreen("forgotpassword")}
              onBack={() => navigateToScreen("intro3", true)}
            />
          </motion.div>
        )}

        {currentScreen === "signup" && (
          <motion.div
            key="signup"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <SignUp
              onCreateAccount={() => navigateToScreen("getstarted")}
              onLogin={() => navigateToScreen("signin", true)}
              onBack={() => navigateToScreen("signin", true)}
            />
          </motion.div>
        )}

        {currentScreen === "forgotpassword" && (
          <motion.div
            key="forgotpassword"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ForgotPassword 
              onSubmit={() => navigateToScreen("getstarted")} 
              onBack={() => navigateToScreen("signin", true)}
            />
          </motion.div>
        )}

        {currentScreen === "getstarted" && (
          <motion.div
            key="getstarted"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <GetStarted onGetStarted={() => navigateToScreen("scanning")} />
          </motion.div>
        )}

        {currentScreen === "scanning" && (
          <motion.div
            key="scanning"
            variants={pageVariants}
            initial="initial"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ScanningPage 
              onComplete={() => navigateToScreen("home")} 
              onBack={() => navigateToScreen("getstarted", true)}
            />
          </motion.div>
        )}

        {currentScreen === "home" && (
          <motion.div
            key="home"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <HomePage 
              onNavigateToGetStarted={() => navigateToScreen("getstarted")}
              onNavigateToShop={() => navigateToScreen("shop")}
              onNavigateToProfile={() => navigateToProfile("home")}
              onNavigateToTrendingProducts={() => navigateToScreen("trending")}
              onNavigateToPlaceOrder={() => navigateToScreen("placeorder")}
            />
          </motion.div>
        )}

        {currentScreen === "shop" && (
          <motion.div
            key="shop"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ShopPage 
              onBack={() => navigateToScreen("home", true)}
              onNavigateToGetStarted={() => navigateToScreen("getstarted")}
              onNavigateToProfile={() => navigateToProfile("shop")}
              onNavigateToCheckout={() => navigateToScreen("placeorder")}
              onNavigateToTrendingProducts={() => navigateToScreen("trending")}
            />
          </motion.div>
        )}

        {currentScreen === "profile" && (
          <motion.div
            key="profile"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ProfilePage 
              onSave={handleProfileSave}
              onBack={() => navigateToScreen("home", true)}
              onNavigateToGetStarted={() => navigateToScreen("getstarted")}
              onNavigateToShop={() => navigateToScreen("shop")}
              onNavigateToCheckout={() => navigateToScreen("placeorder")}
            />
          </motion.div>
        )}

        {currentScreen === "trending" && (
          <motion.div
            key="trending"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <TrendingProductsPage 
              onBack={() => navigateToScreen("home", true)}
              onNavigateToGetStarted={() => navigateToScreen("getstarted")}
              onNavigateToShop={() => navigateToScreen("shop")}
              onNavigateToProfile={() => navigateToProfile("trending")}
              onNavigateToCheckout={() => navigateToScreen("placeorder")}
            />
          </motion.div>
        )}

        {currentScreen === "checkout" && (
          <motion.div
            key="checkout"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="text-center">
              <h1 className="text-[32px] mb-4">Checkout Page</h1>
              <p className="text-[#a8a8a9] mb-8">Coming soon...</p>
              <button
                onClick={() => navigateToScreen("home", true)}
                className="px-6 py-3 bg-[#0088ff] text-white rounded-lg hover:bg-[#0077ee] transition-colors"
              >
                Back to Home
              </button>
            </div>
          </motion.div>
        )}

        {currentScreen === "placeorder" && (
          <motion.div
            key="placeorder"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <PlaceOrderPage 
              onBack={() => navigateToScreen("home", true)}
              onNavigateToGetStarted={() => navigateToScreen("getstarted")}
              onNavigateToShop={() => navigateToScreen("shop")}
              onNavigateToProfile={() => navigateToProfile("placeorder")}
              onNavigateToCheckout={() => navigateToScreen("shipping")}
            />
          </motion.div>
        )}

        {currentScreen === "shipping" && (
          <motion.div
            key="shipping"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ShippingPage 
              onBack={() => navigateToScreen("placeorder", true)}
              onContinue={() => navigateToScreen("successfully")}
              onNavigateToGetStarted={() => navigateToScreen("home")}
              onNavigateToShop={() => navigateToScreen("shop")}
              onNavigateToProfile={() => navigateToProfile("shipping")}
              onNavigateToTrendingProducts={() => navigateToScreen("trending")}
            />
          </motion.div>
        )}

        {currentScreen === "successfully" && (
          <motion.div
            key="successfully"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <SuccessfullyPage 
              onBack={() => navigateToScreen("shipping", true)}
              onLogOut={() => navigateToScreen("loading")}
              onNavigateToGetStarted={() => navigateToScreen("home")}
              onNavigateToShop={() => navigateToScreen("shop")}
              onNavigateToProfile={() => navigateToProfile("successfully")}
              onNavigateToTrendingProducts={() => navigateToScreen("trending")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}