import svgPaths from "./svg-1x9yza2bc6";
import imgGoogle1 from "figma:asset/8e4241399baefbe8f8feffab0fe67682e140e1b1.png";

function Frame() {
  return (
    <div className="absolute bg-[#0088ff] box-border content-stretch flex gap-[10px] h-[55px] items-center justify-center left-[39px] px-[109px] py-[21px] rounded-[4px] top-[511px] w-[317px]">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Create Account</p>
    </div>
  );
}

function CreateAnAccount() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-start leading-[0] left-1/2 text-[14px] text-center text-nowrap top-[710px] translate-x-[-50%]" data-name="Create_An_Account">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#575757]">
        <p className="leading-[normal] text-nowrap whitespace-pre">I Already Have an Account</p>
      </div>
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0088ff]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] text-nowrap underline whitespace-pre">Login</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="google 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGoogle1} />
      </div>
    </div>
  );
}

function Google() {
  return (
    <div className="bg-[#fcf3f6] relative rounded-[50px] shrink-0" data-name="Google">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[15px] relative rounded-[inherit]">
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0088ff] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[75.93%] left-[48.34%] right-[31.07%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 7">
        <g id="Group">
          <path d={svgPaths.p35bf6400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[75.93%] contents left-[48.34%] right-[31.07%] top-0" data-name="Group">
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-0 left-[7.29%] right-[7.29%] top-[23.41%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
        <g id="Group">
          <path d={svgPaths.p600ee00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-0 contents left-[7.29%] right-[7.29%] top-[23.41%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function Apple() {
  return (
    <div className="overflow-clip relative shrink-0 size-[25px]" data-name="apple 1">
      <Group1 />
      <Group4 />
    </div>
  );
}

function Facebook() {
  return (
    <div className="bg-[#fcf3f6] relative rounded-[50px] shrink-0" data-name="Facebook">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[15px] relative rounded-[inherit]">
        <Apple />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0088ff] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-0 left-[24.04%] right-[24.04%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 26">
        <g id="Group">
          <path d={svgPaths.p2abc1d70} fill="var(--fill-0, #3D4DA6)" id="f 1" />
        </g>
      </svg>
    </div>
  );
}

function FacebookAppSymbol() {
  return (
    <div className="overflow-clip relative shrink-0 size-[26px]" data-name="facebook-app-symbol 1">
      <Group5 />
    </div>
  );
}

function Facebook1() {
  return (
    <div className="bg-[#fcf3f6] relative rounded-[50px] shrink-0" data-name="Facebook">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[15px] relative rounded-[inherit]">
        <FacebookAppSymbol />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0088ff] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Buttons">
      <Google />
      <Facebook />
      <Facebook1 />
    </div>
  );
}

function GoodleFbSignIn() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-1/2 top-[591px] translate-x-[-50%]" data-name="Goodle_&_Fb_Sign_in">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#575757] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">- OR Continue with -</p>
      </div>
      <Buttons />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-1/2 top-[591px] translate-x-[-50%]">
      <CreateAnAccount />
      <GoodleFbSignIn />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[45.66%_82.5%_51.88%_13.23%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 21">
        <g id="Group 2">
          <path clipRule="evenodd" d={svgPaths.p39e86800} fill="var(--fill-0, #626262)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.pc43d600} fill="var(--fill-0, #626262)" fillRule="evenodd" id="Shape_2" />
        </g>
      </svg>
    </div>
  );
}

function Eye() {
  return (
    <div className="absolute left-[317px] size-[20px] top-[393px]" data-name="eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1841)" id="eye">
          <path d={svgPaths.p3d74ed00} id="Vector" stroke="var(--stroke-0, #626262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #626262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1841">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Password() {
  return (
    <div className="absolute contents left-[36px] top-[375px]" data-name="Password">
      <div className="absolute bg-[#f3f3f3] border border-[#a8a8a9] border-solid h-[55px] left-[36px] rounded-[10px] top-[375px] w-[317px]" />
      <Group2 />
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[132.5px] text-[#676767] text-[12px] text-center text-nowrap top-[396px] translate-x-[-50%] whitespace-pre">ConfirmPassword</p>
      <Eye />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[37.32%_82.76%_60.21%_12.98%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 21">
        <g id="Group 2">
          <path clipRule="evenodd" d={svgPaths.p1c1ec800} fill="var(--fill-0, #626262)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.p20e9d580} fill="var(--fill-0, #626262)" fillRule="evenodd" id="Shape_2" />
        </g>
      </svg>
    </div>
  );
}

function Eye1() {
  return (
    <div className="absolute left-[318px] size-[20px] top-[320px]" data-name="eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1841)" id="eye">
          <path d={svgPaths.p3d74ed00} id="Vector" stroke="var(--stroke-0, #626262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #626262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1841">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Password1() {
  return (
    <div className="absolute contents left-[37px] top-[302px]" data-name="Password">
      <div className="absolute bg-[#f3f3f3] border border-[#a8a8a9] border-solid h-[55px] left-[37px] rounded-[10px] top-[302px] w-[317px]" />
      <Group6 />
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[108.5px] text-[#676767] text-[12px] text-center text-nowrap top-[323px] translate-x-[-50%] whitespace-pre">Password</p>
      <Eye1 />
    </div>
  );
}

function User() {
  return (
    <div className="absolute left-[48px] size-[24px] top-[245px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="User">
          <path d={svgPaths.p238dee00} fill="var(--fill-0, #626262)" id="Shape" />
          <path d={svgPaths.p37a1ce00} fill="var(--fill-0, #626262)" id="Shape_2" />
        </g>
      </svg>
    </div>
  );
}

function UsernameOrEmail() {
  return (
    <div className="absolute contents left-[37px] top-[229px]" data-name="Username or email">
      <div className="absolute bg-[#f3f3f3] border border-[#a8a8a9] border-solid h-[55px] left-[37px] rounded-[10px] top-[229px] w-[317px]" />
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[133.5px] text-[#676767] text-[12px] text-center text-nowrap top-[250px] translate-x-[-50%] whitespace-pre">Username or Email</p>
      <User />
    </div>
  );
}

function Group7() {
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
    <div className="absolute h-[44px] left-1/2 top-0 translate-x-[-50%] w-[375px]" data-name="Bars / Status Bar / Design / Light">
      <Group7 />
      <TimeStyle />
    </div>
  );
}

export default function SignUp() {
  return (
    <div className="bg-white relative size-full" data-name="Sign Up">
      <div className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[43px] left-[41px] text-[36px] text-black text-nowrap top-[118px] whitespace-pre">
        <p className="mb-0">{`Create an `}</p>
        <p>account</p>
      </div>
      <Frame />
      <Group8 />
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[41px] text-[#676767] text-[12px] top-[456px] w-[258px]">
        <span>{`By clicking the `}</span>
        <span className="text-[#0088ff]">Register</span>
        <span>{` button, you agree to the public offer`}</span>
      </p>
      <Password />
      <Password1 />
      <UsernameOrEmail />
      <BarsStatusBarDesignLight />
      <div className="absolute h-[19px] left-[37px] top-[71px] w-[9.5px]">
        <div className="absolute inset-[-3.72%_-7.44%_-3.72%_-6.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 21">
            <path d={svgPaths.p349a0648} id="Vector 3" stroke="var(--stroke-0, black)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}