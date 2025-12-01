import svgPaths from "./svg-hlzwlii5f6";
import imgVisa1 from "figma:asset/a749638915457eca46b55d641659b150664889ee.png";
import imgPaypal1 from "figma:asset/875603026abf3326872ea6466f190911bec87619.png";
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
    <div className="absolute bg-[#f4f4f4] border-[#0088ff] border-[1.5px] border-solid h-[59px] left-1/2 overflow-clip rounded-[8px] top-[318px] translate-x-[-50%] w-[309px]">
      <div className="absolute h-[20px] left-[15.5px] top-[18.5px] w-[47.826px]" data-name="visa 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[246.76%] left-0 max-w-none top-[-71.94%] w-full" src={imgVisa1} />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] left-[189.5px] text-[#6e7179] text-[15px] text-nowrap top-[28px] translate-y-[-50%]">
        <p className="leading-[29px] whitespace-pre">*********2109</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#f4f4f4] border border-[#f8f8f8] border-solid h-[59px] left-1/2 overflow-clip rounded-[8px] top-[402px] translate-x-[-50%] w-[309px]">
      <div className="absolute h-[20px] left-[17px] top-[19px] w-[62.759px]" data-name="paypal 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[310.3%] left-0 max-w-none top-[-99.39%] w-full" src={imgPaypal1} />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] left-[194px] text-[#6e7179] text-[15px] text-nowrap top-[28.5px] translate-y-[-50%]">
        <p className="leading-[29px] whitespace-pre">*********2109</p>
      </div>
    </div>
  );
}

function Frame3() {
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

function Frame4() {
  return (
    <div className="absolute bg-[#f4f4f4] border border-[#f8f8f8] border-solid h-[59px] left-1/2 overflow-clip rounded-[8px] top-[570px] translate-x-[-50%] w-[309px]">
      <SignInWithAppleLogoOnly />
      <div className="absolute flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] left-[194px] text-[#6e7179] text-[15px] text-nowrap top-[28.5px] translate-y-[-50%]">
        <p className="leading-[29px] whitespace-pre">*********2109</p>
      </div>
    </div>
  );
}

function Price() {
  return (
    <div className="absolute contents left-[252px] top-[124px]" data-name="Price">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium h-[20px] leading-[normal] left-[357px] text-[#a8a8a9] text-[16px] text-right top-[124px] translate-x-[-100%] w-[105px]">$7000</p>
    </div>
  );
}

function Price1() {
  return (
    <div className="absolute contents left-[252px] top-[124px]" data-name="Price">
      <Price />
    </div>
  );
}

function Price2() {
  return (
    <div className="absolute contents left-[250px] top-[165px]" data-name="Price">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium h-[20px] leading-[normal] left-[355px] text-[#a8a8a9] text-[16px] text-right top-[165px] translate-x-[-100%] w-[105px]">$30</p>
    </div>
  );
}

function Price3() {
  return (
    <div className="absolute contents left-[250px] top-[165px]" data-name="Price">
      <Price2 />
    </div>
  );
}

function Price4() {
  return (
    <div className="absolute contents left-[306px] top-[211px]" data-name="Price">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium h-[20px] leading-[normal] left-[356px] text-[#4c5059] text-[16px] text-right top-[211px] translate-x-[-100%] w-[50px]">$7030</p>
    </div>
  );
}

function Price5() {
  return (
    <div className="absolute contents left-[306px] top-[211px]" data-name="Price">
      <Price4 />
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="absolute left-1/2 size-[24px] top-[calc(50%-7px)] translate-x-[-50%] translate-y-[-50%]" data-name="shopping-cart 2">
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
    <div className="absolute contents inset-[6.58%_42.68%_26.75%_42.96%]">
      <div className="absolute bg-[#0088ff] inset-[6.58%_42.68%_26.75%_42.96%] rounded-[50px] shadow-[0px_2px_14px_0px_rgba(0,0,0,0.09)]" />
      <ShoppingCart />
    </div>
  );
}

function Search() {
  return (
    <div className="absolute inset-[22.62%_27.73%_48.81%_65.87%]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 22">
        <g id="search 1">
          <path d={svgPaths.p2ef4bc00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22.288 19L17.6712 15.0643" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute inset-[22.62%_86.41%_48.81%_7.44%]" data-name="home 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 22">
        <g id="home 1">
          <path d={svgPaths.p16393e80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13d1400} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heart() {
  return (
    <div className="absolute inset-[22.62%_66.67%_48.81%_26.93%]" data-name="heart 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 22">
        <g id="heart 1">
          <path d={svgPaths.p2dd94480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Settings() {
  return (
    <div className="absolute inset-[22.62%_8.46%_48.81%_85.38%]" data-name="settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 22">
        <g clipPath="url(#clip0_6_27672)" id="settings">
          <path d={svgPaths.p1d742c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2df8fd00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_6_27672">
            <rect fill="white" height="21.7143" width="24.4923" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[26.19%] contents left-[calc(50%-0.73px)] top-[6.58%] translate-x-[-50%]">
      <Group1 />
      <Search />
      <Home />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[54.76%_85.05%_26.19%_5.89%] leading-[16px] text-[12px] text-black text-center tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Home
      </p>
      <p className="absolute capitalize font-['Roboto:Regular',sans-serif] font-normal inset-[54.76%_63.77%_26.19%_23.96%] leading-[16px] text-[12px] text-black text-center tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        wishlist
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[54.76%_25.81%_26.19%_63.79%] leading-[16px] text-[12px] text-black text-center tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[54.76%_6.26%_26.19%_82.81%] leading-[16px] text-[12px] text-black text-center tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Setting
      </p>
      <Heart />
      <Settings />
    </div>
  );
}

function BottomBarStock() {
  return (
    <div className="absolute h-[76px] left-0 top-[785px] w-[398px]" data-name="Bottom bar/Stock">
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

export default function Shipping() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="Shipping">
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
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[27px] left-[42px] text-[#222222] text-[18px] text-nowrap top-[281px] whitespace-pre">Payment</p>
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Price1 />
      <Price3 />
      <Price5 />
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
    </div>
  );
}