import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface GetStartedProps {
  onGetStarted?: () => void;
}

export const GetStarted = ({ onGetStarted }: GetStartedProps): JSX.Element => {
  const [displayText, setDisplayText] = useState("");
  const tagline = "Your only needed store!";

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setDisplayText("");
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < tagline.length) {
          setDisplayText(tagline.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 80);

      return () => clearInterval(typeInterval);
    }, 5000);

    // Start typing immediately on mount
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < tagline.length) {
        setDisplayText(tagline.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    return () => {
      clearInterval(cycleInterval);
      clearInterval(typeInterval);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white">
      <style>{`
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

      {/* Background Image - Responsive with object-cover */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
        src="/figmaAssets/unsplash-fouvdmgxopi.png"
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content Container - Flexbox vertical layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header - Safe area aware with flexible positioning */}
        <header className="flex items-center justify-between container-responsive safe-top safe-left safe-right pt-3 pb-2">
          {/* Time display - Left aligned with hug contents */}
          <div className="flex items-center hug-contents">
            <span className="font-['Poppins',Helvetica] font-medium text-white text-sm sm:text-base leading-5">
              9:41
            </span>
          </div>

          {/* Status icons - Right aligned with hug contents */}
          <div className="flex items-center hug-contents">
            <img
              className="h-3 sm:h-4 w-auto object-contain scale-image"
              alt="Status icons"
              src="/figmaAssets/group-33677.png"
            />
          </div>
        </header>

        {/* Spacer - Push content to bottom */}
        <div className="flex-1" />

        {/* Main Content - Bottom aligned with auto layout and 8px rhythm */}
        <div className="flex flex-col items-center container-responsive space-y-rhythm-xl pb-8 sm:pb-12">
          {/* Title Text - Typewriter effect */}
          <h1 className="typewriter font-['Montserrat',Helvetica] font-semibold text-white text-center text-2xl sm:text-3xl md:text-[34px] tracking-wide leading-tight sm:leading-normal max-w-xs sm:max-w-sm md:max-w-md min-h-[1.5em]">
            {displayText}
          </h1>

          {/* Subtitle Text - Responsive with proper wrapping */}
          <p className="font-['Montserrat',Helvetica] font-normal text-[#f2f2f2] text-sm sm:text-base text-center tracking-wide leading-relaxed max-w-xs sm:max-w-sm">
          </p>

          {/* CTA Button - Responsive width with consistent spacing */}
          <Button 
            onClick={onGetStarted}
            className="w-full max-w-[280px] sm:max-w-[320px] h-14 sm:h-[55px] flex items-center justify-center bg-[#0088ff] hover:bg-[#0077dd] active:scale-95 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:shadow-none"
          >
            <span className="font-['Montserrat',Helvetica] font-semibold text-white text-lg sm:text-xl md:text-[23px] tracking-normal">
              Get Started
            </span>
          </Button>
        </div>

        {/* Home indicator bar for iOS-style design with safe area */}
        <div className="flex justify-center pb-2 safe-bottom">
          <div className="w-32 sm:w-36 h-1 bg-white/50 rounded-full" />
        </div>
      </div>
    </main>
  );
};
