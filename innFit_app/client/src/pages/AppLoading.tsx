import React, { useEffect, useState } from "react";

interface AppLoadingProps {
  onContinue?: () => void;
}

export default function AppLoading({ onContinue }: AppLoadingProps) {
  const [showContinue, setShowContinue] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const tagline = "Bringing Stores Closer!";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContinue(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setIsTyping(true);
      setDisplayText("");
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < tagline.length) {
          setDisplayText(tagline.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 80);

      return () => clearInterval(typeInterval);
    }, 5000);

    return () => clearInterval(cycleInterval);
  }, []);

  // Start typing immediately on mount
  useEffect(() => {
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < tagline.length) {
        setDisplayText(tagline.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#a8a8a8] safe-top safe-bottom">
      <style>{`
        @keyframes bounce-interactive {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        
        @keyframes rotate-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .bounce-logo {
          animation: bounce-interactive 2s ease-in-out infinite, rotate-slow 20s linear infinite;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        
        .bounce-logo:hover {
          animation: bounce-interactive 1s ease-in-out infinite, rotate-slow 10s linear infinite;
        }

        .typewriter {
          min-height: 1.5em;
        }

        .typewriter::after {
          content: '';
          animation: blink 0.7s infinite;
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
      `}</style>

      <div className="flex flex-col items-center justify-center gap-8 px-6 animate-fade-in">
        <div className="flex flex-col items-center gap-4">
          <div className="w-48 h-48 flex items-center justify-center">
            <img src="/innfit-logo.svg" alt="innFit Logo" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>
          <div className="typewriter text-white/90 font-['Montserrat',Helvetica] text-sm sm:text-base mt-4 h-6">
            {displayText}
          </div>
        </div>

        {!showContinue && (
          <div className="flex items-center gap-2 mt-8">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '450ms' }} />
          </div>
        )}

        {showContinue && (
          <button
            onClick={onContinue}
            className="mt-8 px-8 py-3 bg-white text-[#0088ff] rounded-lg font-['Montserrat',Helvetica] font-semibold text-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 animate-slide-up"
          >
            Continue
          </button>
        )}
      </div>

      <div className="absolute bottom-8 flex justify-center w-full">
        <div className="w-32 h-1 bg-white/50 rounded-full" />
      </div>
    </main>
  );
}
