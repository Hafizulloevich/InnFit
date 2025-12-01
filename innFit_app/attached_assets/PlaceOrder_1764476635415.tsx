import svgPaths from "./svg-dog1zz6je3";
import imgImage15 from "figma:asset/8078cca87e2902aed324a7079170bc593f670a51.png";

function UiBarsTabBarsBaseLight5TextIcons() {
  return (
    <div className="absolute bottom-[-38.36%] left-0 right-0 top-[-61.64%]" data-name="UI Bars / Tab Bars / Base / Light / 5 Text Icons">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 147">
          <g id="UI Bars / Tab Bars / Base / Light / 5 Text Icons">
            <g data-figma-bg-blur-radius="27.1828" filter="url(#filter0_d_6_27485)" id="Background">
              <path clipRule="evenodd" d={svgPaths.p2a0da480} fill="var(--fill-0, #F8F8F8)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="200.366" id="filter0_d_6_27485" width="447.366" x="-27.1828" y="-26.6828">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="-0.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_27485" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_27485" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_0_6_27485_clip_path" transform="translate(27.1828 26.6828)">
              <path clipRule="evenodd" d={svgPaths.p2a0da480} fillRule="evenodd" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return <div className="absolute bottom-[-13px] h-[34px] left-0 right-0" data-name="Home Indicator" />;
}

function ProceedToPayment() {
  return (
    <div className="absolute contents left-[calc(50%+69px)] top-px translate-x-[-50%]" data-name="Proceed to Payment">
      <p className="absolute font-['Montserrat:Thin_Italic',sans-serif] font-thin italic leading-[22px] left-[calc(50%+69px)] text-[17px] text-center text-white top-px tracking-[-0.41px] translate-x-[-50%] w-[161.577px]">Proceed to Payment</p>
    </div>
  );
}

function ProdeedButton() {
  return (
    <div className="absolute contents left-[152px] top-[-12px]" data-name="Prodeed Button">
      <div className="absolute bg-[#0088ff] h-[48px] left-[152px] rounded-[5px] top-[-12px] w-[219px]" />
      <ProceedToPayment />
    </div>
  );
}

function OrderAmount() {
  return (
    <div className="absolute contents left-[35px] top-[-8px]" data-name="Order Amount">
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold h-[20px] leading-[normal] left-[116px] text-[16px] text-black text-right top-[-8px] translate-x-[-100%] w-[81px]">$7,000.00</p>
    </div>
  );
}

function TabBar() {
  return (
    <div className="absolute h-[73px] left-[-1px] top-[779px] w-[393px]" data-name="Tab bar">
      <UiBarsTabBarsBaseLight5TextIcons />
      <HomeIndicator />
      <ProdeedButton />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[39px] text-[#0088ff] text-[12px] text-nowrap top-[20px] whitespace-pre">View Details</p>
      <OrderAmount />
    </div>
  );
}

function TaskBar() {
  return (
    <div className="absolute contents left-[-1px] top-[779px]" data-name="Task Bar">
      <TabBar />
    </div>
  );
}

function ToolBar() {
  return (
    <div className="absolute contents left-[-1px] top-[779px]" data-name="Tool Bar">
      <TaskBar />
    </div>
  );
}

function OrderAmount1() {
  return (
    <div className="absolute contents left-[286px] top-[460px]" data-name="Order Amount">
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold h-[20px] leading-[normal] left-[367px] text-[16px] text-black text-right top-[460px] translate-x-[-100%] w-[81px]">$7,000.00</p>
    </div>
  );
}

function OrderDetails() {
  return (
    <div className="absolute contents left-[22px] top-[413px]" data-name="Order Details">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[22px] text-[17px] text-black text-nowrap top-[413px] tracking-[-0.7px] whitespace-pre">Order Payment Details</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[22px] text-[16px] text-black text-nowrap top-[460px] tracking-[-0.7px] whitespace-pre">Order Amount</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[22px] text-[16px] text-black text-nowrap top-[492px] tracking-[-0.7px] whitespace-pre">Convenience</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[22px] text-[14px] text-black text-nowrap top-[524px] tracking-[-0.7px] whitespace-pre">Delivery Fee</p>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[134px] text-[#0088ff] text-[12px] text-nowrap top-[496px] whitespace-pre">Know More</p>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[371px] text-[#0088ff] text-[14px] text-nowrap text-right top-[521px] translate-x-[-100%] whitespace-pre">Free</p>
      <OrderAmount1 />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[371px] text-[#0088ff] text-[12px] text-nowrap text-right top-[495px] translate-x-[-100%] whitespace-pre">Apply Coupon</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[37.68%_86.51%_59.98%_5.6%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 20">
        <g id="Group">
          <path d={svgPaths.p1a36dc00} fill="var(--fill-0, #231F20)" id="Vector" />
          <path d={svgPaths.p2a60c900} fill="var(--fill-0, #231F20)" id="Vector_2" />
          <path d={svgPaths.p25a9f800} fill="var(--fill-0, #231F20)" id="Vector_3" />
          <path d={svgPaths.p310a5c00} fill="var(--fill-0, #231F20)" id="Vector_4" />
          <path d={svgPaths.p139a96f2} fill="var(--fill-0, #231F20)" id="Vector_5" />
          <path d={svgPaths.p31c7dff0} fill="var(--fill-0, #231F20)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function IconCoupon() {
  return (
    <div className="absolute contents inset-[37.68%_86.51%_59.98%_5.6%]" data-name="🦆 icon 'coupon'">
      <Group />
    </div>
  );
}

function Coupon() {
  return (
    <div className="absolute contents left-[22px] top-[321px]" data-name="Coupon">
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[375px] text-[#0088ff] text-[14px] text-nowrap text-right top-[322px] tracking-[-0.7px] translate-x-[-100%] whitespace-pre">Select</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[63px] text-[16px] text-black text-nowrap top-[321px] tracking-[-0.7px] whitespace-pre">Apply Coupons</p>
      <IconCoupon />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute contents left-[17px] top-[321px]" data-name="Body">
      <div className="absolute flex h-px items-center justify-center left-[17px] top-[582px] w-[357px]" style={{ "--transform-inner-width": "357", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.16deg]">
          <div className="h-0 relative w-[357.001px]" data-name="Below Lines">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 357 1">
                <line id="Below Lines" stroke="var(--stroke-0, #CACACA)" x2="357.001" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <OrderDetails />
      <div className="absolute flex h-px items-center justify-center left-[17px] top-[377px] w-[357px]" style={{ "--transform-inner-width": "357", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.16deg]">
          <div className="h-0 relative w-[357.001px]" data-name="Above Lines">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 357 1">
                <path d="M0 0.5H357.001" id="Above Lines" stroke="var(--stroke-0, #CACACA)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Coupon />
    </div>
  );
}

function Size() {
  return (
    <div className="absolute contents left-[149px] text-black top-[7px]" data-name="Size">
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold h-[20px] leading-[normal] left-[227px] text-[16px] top-[116px] tracking-[-1.1px] w-[110px]">17 Dec 2025</p>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold h-[23px] leading-[22px] left-[149px] text-[16px] top-[7px] w-[188px]">Women’s Casual Wear</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[150px] text-[13px] top-[117px] tracking-[-0.3px] w-[72px]">{`Delivery by: `}</p>
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="absolute inset-[54.36%_22.77%_42%_74.76%]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
        <g id="keyboard_arrow_down">
          <path d={svgPaths.p3fdabb00} fill="var(--fill-0, #1C1B1F)" id="keyboard_arrow_down_2" />
        </g>
      </svg>
    </div>
  );
}

function Qty() {
  return (
    <div className="absolute contents left-[253px] top-[83.17px]" data-name="Qty">
      <div className="absolute flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[253px] text-[14px] text-black top-[92px] translate-y-[-50%] w-[31px]">
        <p className="leading-[normal]">Qty</p>
      </div>
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[293px] text-[14px] text-black top-[84px] tracking-[-1.2px] w-[5px]">1</p>
      <KeyboardArrowDown />
    </div>
  );
}

function QtyNo() {
  return (
    <div className="absolute contents left-[247px] top-[80px]" data-name="Qty No.">
      <div className="absolute bg-[#f2f2f2] h-[25px] left-[247px] rounded-[4px] top-[80px] w-[90px]" />
      <Qty />
    </div>
  );
}

function KeyboardArrowDown1() {
  return (
    <div className="absolute inset-[54.36%_46.24%_42%_51.29%]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
        <g id="keyboard_arrow_down">
          <path d={svgPaths.p3fdabb00} fill="var(--fill-0, #1C1B1F)" id="keyboard_arrow_down_2" />
        </g>
      </svg>
    </div>
  );
}

function Size1() {
  return (
    <div className="absolute contents left-[155px] top-[83.17px]" data-name="Size">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[155px] text-[14px] text-black top-[84px] w-[31px]">Size</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[193px] text-[14px] text-black top-[84px] tracking-[-1.2px] w-[16.825px]">42</p>
      <KeyboardArrowDown1 />
    </div>
  );
}

function SizeNo() {
  return (
    <div className="absolute contents left-[149px] top-[80px]" data-name="Size No.">
      <div className="absolute bg-[#f2f2f2] h-[25px] left-[149px] rounded-[4px] top-[80px] w-[86px]" />
      <Size1 />
    </div>
  );
}

function ProductName() {
  return (
    <div className="absolute contents left-[149px] top-[38px]" data-name="Product Name">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal h-[34px] leading-[normal] left-[149px] text-[13px] text-black top-[38px] w-[188px]">Checked Single-Breasted Blazer</p>
    </div>
  );
}

function ProductDetails() {
  return (
    <div className="absolute contents left-[5px] top-0" data-name="Product Details">
      <Size />
      <QtyNo />
      <SizeNo />
      <ProductName />
      <div className="absolute bottom-0 left-[1.17%] right-[69.95%] rounded-[4px] top-0" data-name="image 15">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
          <img alt="" className="absolute h-[152.25%] left-[-16.5%] max-w-none top-[-14.21%] w-[131.36%]" src={imgImage15} />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[153px] left-[17px] top-[114px] w-[426px]">
      <ProductDetails />
    </div>
  );
}

function ArrowBack() {
  return <div className="absolute contents inset-[6.22%_87.02%_90.96%_6.87%]" data-name="arrow_back" />;
}

function Bag() {
  return (
    <div className="absolute contents inset-[6.22%_87.02%_90.96%_6.87%]" data-name="Bag">
      <ArrowBack />
    </div>
  );
}

function Favorite() {
  return (
    <div className="absolute inset-[6.69%_7.43%_91.49%_87.53%]" data-name="favorite">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="favorite">
          <path d={svgPaths.p26747e00} fill="var(--fill-0, black)" id="favorite_2" />
        </g>
      </svg>
    </div>
  );
}

function Bag1() {
  return (
    <div className="absolute contents left-[22px] top-[53px]" data-name="Bag">
      <div className="absolute bottom-[91.08%] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-57.5px)] text-[16px] text-black text-nowrap top-[6.34%] tracking-[-0.41px]">
        <p className="leading-[22px] whitespace-pre">Shopping Bag</p>
      </div>
      <Bag />
      <Favorite />
      <div className="absolute h-[19px] left-[22px] top-[55px] w-[9.5px]">
        <div className="absolute inset-[-3.72%_-7.44%_-3.72%_-6.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 21">
            <path d={svgPaths.p349a0648} id="Vector 3" stroke="var(--stroke-0, black)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.91%_34.85%_89.6%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 12">
        <g id="Battery">
          <path d={svgPaths.pf0cab00} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p39d3ddc0} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
          <path d={svgPaths.p17f8be00} fill="var(--fill-0, black)" id="Rectangle_2" />
        </g>
      </svg>
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
    <div className="absolute bottom-[94.84%] left-0 right-0 top-0" data-name="Status Bar">
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

function Group1() {
  return (
    <div className="absolute inset-[70.45%_89.66%_27.71%_7.14%]" data-name="Group">
      <div className="absolute inset-[-0.32%_-0.4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 16">
          <g id="Group">
            <path d={svgPaths.p1736a00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.1" />
            <path d={svgPaths.p3119000} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="0.1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[27.34%] contents left-[28.06px] top-[69.95%]">
      <div className="absolute bottom-[27.34%] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-140.5px)] text-[14px] text-black top-[69.95%] w-[122px]">
        <p className="leading-[22px]">Delivery Address</p>
      </div>
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="relative size-full" data-name="Group">
      <div className="absolute inset-[-0.99%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <g id="Group">
            <path d={svgPaths.pdcb900} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
            <path d={svgPaths.p1d59a080} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
            <path d={svgPaths.p1eea5f80} fill="var(--fill-0, black)" id="Vector_3" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[27px] top-[596px]">
      <div className="absolute bg-white h-[79px] left-[27px] rounded-[6px] shadow-[0px_-4px_9px_-7px_rgba(0,0,0,0.25),0px_6px_14px_-8px_rgba(0,0,0,0.25)] top-[621.89px] w-[241px]" />
      <div className="absolute bottom-[24.29%] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-153.5px)] text-[12px] text-black top-[73%] w-[56px]">
        <p className="leading-[22px]">Address:</p>
      </div>
      <div className="absolute bottom-[19.14%] font-['Montserrat:Regular',sans-serif] font-normal leading-[14px] left-[calc(50%-154.5px)] text-[12px] text-black top-[75.93%] w-[213px]">
        <p className="mb-0">216 This Rd, Woosong University, Korea</p>
        <p>Contact : + 8244-784232</p>
      </div>
      <Group3 />
      <div className="absolute bg-white h-[79px] left-[280px] rounded-[6px] shadow-[0px_-4px_9px_-7px_rgba(0,0,0,0.25),0px_6px_14px_-8px_rgba(0,0,0,0.25)] top-[621.89px] w-[78px]" />
      <div className="absolute flex inset-[75.69%_15.74%_21.35%_77.86%] items-center justify-center">
        <div className="flex-none h-[25.182px] scale-y-[-100%] w-[25.152px]">
          <Group2 />
        </div>
      </div>
      <p className="absolute bottom-[18.67%] font-['Montserrat:Regular',sans-serif] font-normal leading-[14px] left-[calc(50%+100.5px)] text-[12px] text-black top-[79.8%] w-[29px]">Edit</p>
    </div>
  );
}

export default function PlaceOrder() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="Place Order">
      <ToolBar />
      <div className="absolute bg-[#b7b7b7] bottom-[13px] h-[5px] left-[120px] right-[120px] rounded-[100px]" data-name="Line" />
      <Body />
      <Frame />
      <Bag1 />
      <StatusBar />
      <Group4 />
    </div>
  );
}