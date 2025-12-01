import svgPaths from "./svg-bmbwre09jq";

function Frame() {
  return (
    <div className="absolute bg-[#0088ff] box-border content-stretch flex gap-[10px] h-[55px] items-center justify-center left-[44px] px-[109px] py-[21px] rounded-[4px] top-[508px] w-[317px]">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Submit</p>
    </div>
  );
}

function Mail() {
  return (
    <div className="absolute left-[51px] size-[24px] top-[368px]" data-name="Mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Mail">
          <path clipRule="evenodd" d={svgPaths.p1eee8a80} fill="var(--fill-0, #626262)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function EnterYourEmailAddress() {
  return (
    <div className="absolute contents left-[38px] top-[351px]" data-name="Enter your email address">
      <div className="absolute bg-[#f3f3f3] border border-[#a8a8a9] border-solid h-[55px] left-[38px] rounded-[10px] top-[351px] w-[317px]" />
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[158px] text-[#676767] text-[12px] text-center text-nowrap top-[373px] translate-x-[-50%] whitespace-pre">Enter your email address</p>
      <Mail />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[34.85%] right-[14.34px] top-[39.39%] w-[66.662px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Group 33677">
          <g id="Battery">
            <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="42.8335" y="0.502686" />
            <path d={svgPaths.p33573c00} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="44.3335" y="2.00269" />
          </g>
          <path d={svgPaths.p9212ee0} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p53e9200} fill="var(--fill-0, black)" id="Cellular Connection" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute bottom-[36.36%] left-[21px] top-[15.91%] w-[54px]" data-name="Time Style">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[20px] left-0 not-italic right-[44.44%] text-[15px] text-black text-center top-[calc(50%-4.5px)]">9:41</p>
    </div>
  );
}

function BarsStatusBarDesignLight() {
  return (
    <div className="absolute h-[44px] left-[9px] top-0 w-[375px]" data-name="Bars / Status Bar / Design / Light">
      <Group />
      <TimeStyle />
    </div>
  );
}

export default function ForgotPassword() {
  return (
    <div className="bg-white relative size-full" data-name="Forgot password">
      <div className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[43px] left-[44px] text-[36px] text-black text-nowrap top-[233px] whitespace-pre">
        <p className="mb-0">Forgot</p>
        <p>password?</p>
      </div>
      <Frame />
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal h-[48px] leading-[normal] left-[52px] text-[#676767] text-[12px] top-[439px] w-[282px]">
        <span className="text-[#ff4b26]">*</span>
        <span>{` We will send you a message to set or reset your new password`}</span>
      </p>
      <EnterYourEmailAddress />
      <BarsStatusBarDesignLight />
      <div className="absolute h-[19px] left-[39px] top-[68px] w-[9.5px]">
        <div className="absolute inset-[-3.72%_-7.44%_-3.72%_-6.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 21">
            <path d={svgPaths.p349a0648} id="Vector 3" stroke="var(--stroke-0, black)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}