import React from "react";
import chosingImage from "@assets/generated_images/person_choosing_products.png";

interface IntroductionScreen1Props {
  onNext?: () => void;
  onSkip?: () => void;
}

export default function IntroductionScreen1({
  onNext,
  onSkip,
}: IntroductionScreen1Props) {
  return (
    <main className="relative min-h-screen w-full flex flex-col bg-white safe-top safe-bottom animate-fade-in">
      <header className="flex items-center justify-between container-responsive pt-4 pb-2">
        <span className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">
          1<span className="text-[#a0a0a1]">/3</span>
        </span>
        <button
          onClick={onSkip}
          className="font-['Montserrat',Helvetica] font-semibold text-lg text-black hover:text-[#0088ff] active:scale-95 transition-all duration-200"
        >
          Skip
        </button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] rounded-2xl flex items-center justify-center mb-8 overflow-hidden">
          <img src={chosingImage} alt="Choose Products" className="w-full h-full object-cover" />
        </div>

        <div className="text-center space-y-4 max-w-sm">
          <h1 className="font-['Montserrat',Helvetica] font-extrabold text-2xl sm:text-[24px] text-black">
            Choose Products
          </h1>
          <p className="font-['Montserrat',Helvetica] font-semibold text-sm sm:text-[14px] text-[#a8a8a9] leading-relaxed">
            From the selection of thousands of products, choose the ones that
            fit your body perfectly.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between container-responsive pb-8">
        <div className="w-11" />

        <div className="flex items-center gap-2">
          <div className="w-10 h-2 bg-[#17223b] rounded-full transition-all duration-300" />
          <div className="w-2.5 h-2.5 bg-[#17223b]/20 rounded-full transition-all duration-300" />
          <div className="w-2.5 h-2.5 bg-[#17223b]/20 rounded-full transition-all duration-300" />
        </div>

        <button
          onClick={onNext}
          className="font-['Montserrat',Helvetica] font-semibold text-lg text-[#0088ff] hover:text-[#0066cc] active:scale-95 transition-all duration-200"
        >
          Next
        </button>
      </div>
    </main>
  );
}
