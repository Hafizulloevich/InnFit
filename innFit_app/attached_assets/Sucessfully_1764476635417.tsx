import svgPaths from "./svg-x6j0vnonm4";
import imgMaestro1 from "figma:asset/8d16b6db1b4d1093ed18afc5716438b4d0b63a46.png";

function Frame() {
  return (
    <div className="absolute bg-[#0088ff] h-[59px] left-1/2 overflow-clip rounded-[8px] top-[654px] translate-x-[-50%] w-[309px]">
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-46.5px)] text-[22px] text-nowrap text-white top-[29px] tracking-[-0.41px] translate-y-[-50%]">
        <p className="leading-[22px] whitespace-pre">Continue</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f4f4f4] border border-[#f8f8f8] border-solid h-[59px] left-1/2 overflow-clip rounded-[8px] top-[486px] translate-x-[-50%] w-[309px]">
      <div className="absolute left-[17px] size-[20px] top-[19px]" data-name="maestro 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMaestro1} />
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] left-[194px] text-[#6e7179] text-[15px] text-nowrap top-[28.5px] translate-y-[-50%]">
        <p className="leading-[29px] whitespace-pre">*********2109</p>
      </div>
    </div>
  );
}

function SignInWithAppleLogoOnly() {
  return (
    <div className="absolute bg-white left-[17px] rounded-[20px] size-[24px] top-[18px]" data-name="Sign in with Apple (Logo-only)">
      <div className="absolute inset-[22.73%_32.95%_34.09%_32.95%]" data-name="">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 11">
          <path clipRule="evenodd" d={svgPaths.p14e70900} fill="var(--fill-0, black)" fillRule="evenodd" id="ï£¿" />
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#f4f4f4] border border-[#f8f8f8] border-solid h-[59px] left-1/2 overflow-clip rounded-[8px] top-[570px] translate-x-[-50%] w-[309px]">
      <SignInWithAppleLogoOnly />
      <div className="absolute flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] left-[194px] text-[#6e7179] text-[15px] text-nowrap top-[28.5px] translate-y-[-50%]">
        <p className="leading-[29px] whitespace-pre">*********2109</p>
      </div>
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="absolute left-[calc(50%-2.5px)] size-[24px] top-[calc(50%-12px)] translate-x-[-50%] translate-y-[-50%]" data-name="shopping-cart 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shopping-cart 2">
          <path d={svgPaths.p1c97d4f2} id="Vector" stroke="var(--stroke-0, #E9E9E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p24d302c0} id="Vector_2" stroke="var(--stroke-0, #E9E9E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p24e32400} id="Vector_3" stroke="var(--stroke-0, #E9E9E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[2.38%_43.59%_30.95%_42.05%]">
      <div className="absolute bg-[#0088ff] inset-[2.38%_43.59%_30.95%_42.05%] rounded-[50px] shadow-[0px_2px_14px_0px_rgba(0,0,0,0.09)]" />
      <ShoppingCart />
    </div>
  );
}

function Search() {
  return (
    <div className="absolute inset-[22.62%_27.73%_48.81%_65.87%]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search 1">
          <path d={svgPaths.p19568f00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 21L16.65 16.65" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute inset-[22.62%_86.41%_48.81%_7.44%]" data-name="home 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home 1">
          <path d={svgPaths.p184af800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.65385 22V12H14.4231V22" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heart() {
  return (
    <div className="absolute inset-[22.62%_66.67%_48.81%_26.93%]" data-name="heart 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heart 1">
          <path d={svgPaths.p3ee62280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Settings() {
  return (
    <div className="absolute inset-[22.62%_8.46%_48.81%_85.38%]" data-name="settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_24114)" id="settings">
          <path d={svgPaths.p1df9c200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p33b11000} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_24114">
            <rect fill="white" height="24" width="23.0769" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[26.19%] contents left-[calc(50%-0.69px)] top-[2.38%] translate-x-[-50%]">
      <Group1 />
      <Search />
      <Home />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[54.76%_85.05%_26.19%_5.89%] leading-[16px] text-[12px] text-black text-center text-nowrap tracking-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Home
      </p>
      <p className="absolute capitalize font-['Roboto:Regular',sans-serif] font-normal inset-[54.76%_63.77%_26.19%_23.96%] leading-[16px] text-[12px] text-black text-center text-nowrap tracking-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        wishlist
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[54.76%_25.81%_26.19%_63.79%] leading-[16px] text-[12px] text-black text-center text-nowrap tracking-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[54.76%_6.26%_26.19%_82.81%] leading-[16px] text-[12px] text-black text-center text-nowrap tracking-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Setting
      </p>
      <Heart />
      <Settings />
    </div>
  );
}

function BottomBarStock() {
  return (
    <div className="absolute h-[84px] left-[9px] top-[778px] w-[375px]" data-name="Bottom bar/Stock">
      <div className="absolute bg-white bottom-0 left-0 right-0 shadow-[0px_-1px_1px_0px_rgba(0,0,0,0.1)] top-[9.52%]" />
      <Group />
    </div>
  );
}

function Back() {
  return <div className="absolute h-[22px] left-[27px] top-[62px] w-[58px]" data-name="Back" />;
}

function Tittle() {
  return (
    <div className="absolute contents left-[27px] top-[62px]" data-name="Tittle">
      <Back />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute contents inset-[39.39%_3.91%_34.85%_89.6%]" data-name="Battery">
      <div className="absolute inset-[39.39%_4.53%_34.85%_89.6%]" data-name="Rectangle">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 12">
          <path d={svgPaths.pf0cab00} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
      <div className="absolute inset-[47.73%_3.91%_43.18%_95.73%]" data-name="Combined Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
          <path d={svgPaths.p39740600} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute inset-[43.94%_5.07%_39.39%_90.13%]" data-name="Rectangle">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 8">
          <path d={svgPaths.pc707290} fill="var(--fill-0, black)" id="Rectangle" />
        </svg>
      </div>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute bottom-1/4 left-[5.6%] right-[80%] top-[27.27%]" data-name="Time Style">
      <div className="absolute bottom-[4.76%] flex flex-col font-['Montserrat:Thin_Italic',sans-serif] font-thin italic justify-end leading-[0] left-0 right-0 text-[15px] text-black text-center top-[9.52%] tracking-[-0.3px]">
        <p className="leading-[normal]">9:41</p>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[44px] left-0 right-0 top-0" data-name="Status Bar">
      <Battery />
      <div className="absolute inset-[39.39%_11.74%_35.69%_84.18%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
          <path d={svgPaths.p250b4a80} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.16%_35.61%_78.31%]" data-name="Mobile Signal">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
          <path d={svgPaths.p107b9d00} fill="var(--fill-0, black)" id="Mobile Signal" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

function OrderAmount() {
  return (
    <div className="absolute contents left-[280px] top-[221px]" data-name="Order Amount">
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold h-[20px] leading-[normal] left-[361px] text-[16px] text-black text-right top-[221px] translate-x-[-100%] w-[81px]">$7030</p>
    </div>
  );
}

export default function Sucessfully() {
  return (
    <div className="bg-white relative size-full" data-name="Sucessfully">
      <Frame />
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] left-[42px] text-[#a8a8a9] text-[18px] text-nowrap top-[123px] whitespace-pre">Order</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] left-[42px] text-[#a8a8a9] text-[18px] text-nowrap top-[165px] whitespace-pre">Shipping</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] left-[43px] text-[#4c5059] text-[18px] text-nowrap top-[207px] whitespace-pre">Total</p>
      <div className="absolute h-0 left-[42px] top-[253px] w-[309.006px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 309 2">
            <line id="Line 33" stroke="var(--stroke-0, #C4C4C4)" strokeWidth="1.5" x2="309.006" y1="0.75" y2="0.75" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Montserrat:Thin_Italic',sans-serif] font-thin italic leading-[27px] left-[42px] text-[#222222] text-[18px] text-nowrap top-[281px] whitespace-pre">Payment</p>
      <Frame1 />
      <Frame2 />
      <BottomBarStock />
      <Tittle />
      <StatusBar />
      <div className="absolute bottom-[89.67%] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%+0.5px)] text-[18px] text-black text-center text-nowrap top-[7.75%] translate-x-[-50%]">
        <p className="leading-[22px] whitespace-pre">Checkout</p>
      </div>
      <div className="absolute h-[19px] left-[22px] top-[67px] w-[9.5px]">
        <div className="absolute inset-[-3.72%_-7.44%_-3.72%_-6.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 21">
            <path d={svgPaths.p349a0648} id="Vector 3" stroke="var(--stroke-0, black)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[106px] w-[375px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 1">
            <line id="Line 5" opacity="0.2" stroke="var(--stroke-0, #C6C6C6)" x2="375" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[100px] size-[14px] top-[297px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative size-[14px]">
            <div className="absolute inset-[3.01%_3.23%_3.87%_3.23%]" style={{ "--fill-0": "rgba(0, 136, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p1e23c380} fill="var(--fill-0, #0088FF)" id="Star 8" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[190px] size-[7px] top-[286px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative size-[7px]">
            <div className="absolute inset-[3.01%_3.23%_3.87%_3.23%]" style={{ "--fill-0": "rgba(0, 136, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                <path d={svgPaths.pd13df80} fill="var(--fill-0, #0088FF)" id="Star 2" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <OrderAmount />
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium h-[20px] leading-[normal] left-[358px] text-[#a8a8a9] text-[16px] text-right top-[169px] translate-x-[-100%] w-[105px]">$30</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium h-[20px] leading-[normal] left-[364px] text-[#a8a8a9] text-[16px] text-right top-[123px] translate-x-[-100%] w-[105px]">$7000</p>
      <div className="absolute inset-[-13.15%_-1.27%_-1.17%_-2.54%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 974">
          <path d="M0 0H408V974H0V0Z" fill="var(--fill-0, #0D0B0B)" id="Rectangle 96" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute h-[201px] left-[33.33px] top-[304px] w-[330.667px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 201">
          <path d={svgPaths.p1588ec00} fill="var(--fill-0, white)" id="Rectangle 97" />
        </svg>
      </div>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[27px] left-[calc(50%-118.5px)] text-[#222222] text-[14px] top-[449px] w-[250.067px]">Payment completed successfully!</p>
      <div className="absolute flex h-[14px] items-center justify-center left-[250.8px] top-[363px] w-[14.467px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[14px] relative w-[14.467px]">
            <div className="absolute inset-[2.99%_3.26%_3.82%_3.26%]" style={{ "--fill-0": "rgba(0, 136, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p2711f980} fill="var(--fill-0, #0088FF)" id="Star 4" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[91px] left-[150px] top-[346px] w-[94.033px]">
        <div className="absolute inset-[2.99%_3.26%_3.82%_3.26%]" style={{ "--fill-0": "rgba(0, 136, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 85">
            <path d={svgPaths.pc60ed40} fill="var(--fill-0, #0088FF)" id="Star 1" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[30.924px] items-center justify-center left-[179px] top-[377px] w-[44.653px]" style={{ "--transform-inner-width": "42.34375", "--transform-inner-height": "27.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.775deg] skew-x-[359.678deg]">
          <div className="h-[27.507px] relative w-[42.357px]">
            <div className="absolute inset-[-5.22%_-3.28%_-5.85%_-3.28%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 31">
                <path d={svgPaths.p25b59f80} id="Vector 5" stroke="var(--stroke-0, white)" strokeWidth="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[11px] items-center justify-center left-[139.2px] top-[421px] w-[11.367px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[11px] relative w-[11.367px]">
            <div className="absolute inset-[2.99%_3.26%_3.82%_3.26%]" style={{ "--fill-0": "rgba(0, 136, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p16933b00} fill="var(--fill-0, #0088FF)" id="Star 6" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[7px] items-center justify-center left-[120.6px] top-[377px] w-[7.233px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[7px] relative w-[7.233px]">
            <div className="absolute inset-[2.99%_3.26%_3.82%_3.26%]" style={{ "--fill-0": "rgba(0, 136, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                <path d={svgPaths.p1701f600} fill="var(--fill-0, #0088FF)" id="Star 5" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[7px] items-center justify-center left-[249.77px] top-[410px] w-[7.233px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[7px] relative w-[7.233px]">
            <div className="absolute inset-[2.99%_3.26%_3.82%_3.26%]" style={{ "--fill-0": "rgba(0, 136, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                <path d={svgPaths.p1701f600} fill="var(--fill-0, #0088FF)" id="Star 5" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}