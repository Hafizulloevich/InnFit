import svgPaths from "./svg-ucgu938flk";
import img2289SkVnqsbgqu1PidEwMjgtMte22 from "figma:asset/e2db1865e7299c33d1d7de36aa46e37cda72d981.png";

function ButtonSaveprofileSelf() {
  return (
    <div className="absolute bg-[#0088ff] box-border content-stretch flex items-center justify-center left-[6.4%] overflow-clip px-[32px] py-[14px] right-[6.4%] rounded-[8px] top-[calc(50%+745.5px)] translate-y-[-50%]" data-name="button_saveprofile- self">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[15px] text-nowrap text-white tracking-[0.075px] whitespace-pre">Save</p>
    </div>
  );
}

function GroupLayer() {
  return (
    <div className="absolute contents inset-0" data-name="group_Layer 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="group_edit">
          <path d="M18 0H0V18H18V0Z" fill="var(--fill-0, white)" id="view_Vector" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function GroupEdit() {
  return (
    <div className="absolute left-[215px] overflow-clip size-[18px] top-[192px]" data-name="group_edit 1">
      <GroupLayer />
    </div>
  );
}

function GroupEdit1() {
  return (
    <div className="absolute contents left-[208px] top-[185px]" data-name="group_Edit">
      <div className="absolute left-[208px] size-[32px] top-[185px]" data-name="view_BG">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #4392F9)" id="view_BG" r="14.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
        </svg>
      </div>
      <GroupEdit />
    </div>
  );
}

function GroupProfile() {
  return (
    <div className="absolute contents left-[143.58px] top-[119px]" data-name="group_Profile">
      <div className="absolute inset-[7.18%_37.87%_87.02%_36.53%] rounded-[100px]" data-name="2289_SkVNQSBGQU1PIDEwMjgtMTE2 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={img2289SkVnqsbgqu1PidEwMjgtMte22} />
      </div>
      <GroupEdit1 />
    </div>
  );
}

function GroupGroup() {
  return (
    <div className="absolute inset-[11.71%_38.4%_87.42%_57.87%]" data-name="group_Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="group_Group">
          <path d={svgPaths.p281b1340} fill="var(--fill-0, white)" id="view_Vector" />
          <path d={svgPaths.pf048200} fill="var(--fill-0, white)" id="view_Vector_2" />
          <path d={svgPaths.p1057d980} fill="var(--fill-0, white)" id="view_Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute bottom-[34.85%] contents right-[14.34px] top-[39.39%]" data-name="Battery">
      <div className="absolute border border-black border-solid bottom-[34.85%] opacity-[0.35] right-[16.67px] rounded-[2.667px] top-[39.39%] w-[22px]" data-name="Border" />
      <div className="absolute bottom-[43.18%] right-[14.34px] top-[47.73%] w-[1.328px]" data-name="Cap">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
          <path d={svgPaths.p32d253c0} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bg-black bottom-[39.39%] right-[18.67px] rounded-[1.333px] top-[43.94%] w-[18px]" data-name="Capacity" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[34.85%] contents right-[14.34px] top-[39.39%]">
      <Battery />
      <div className="absolute bottom-[35.61%] right-[43.67px] top-[39.39%] w-[15.333px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
          <path d={svgPaths.p39712400} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute bottom-[35.61%] right-[64px] top-[40.15%] w-[17px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
          <path d={svgPaths.p26d17600} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute bottom-[36.36%] left-[21px] top-[15.91%] w-[54px]" data-name="Time Style">
      <p className="absolute font-['Montserrat:Thin_Italic',sans-serif] font-thin italic leading-[20px] left-0 right-0 text-[15px] text-black text-center top-[calc(50%-4.5px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarDesignLight() {
  return (
    <div className="absolute bottom-[97.34%] left-0 right-0 top-0" data-name="Bars / Status Bar / Design / Light">
      <Group />
      <TimeStyle />
    </div>
  );
}

export default function Profile() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="Profile">
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[33px] text-[16px] text-black text-nowrap top-[573px] whitespace-pre">Business Address Details</p>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[33px] text-[18px] text-black text-nowrap top-[248px] whitespace-pre">Personal Details</p>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[33px] text-[16px] text-black text-nowrap top-[1183px] whitespace-pre">Bank Account Details</p>
      <div className="absolute h-0 left-[33px] top-[539px] w-[327px]" data-name="view_Line 22">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327 1">
            <line id="view_Line 22" stroke="var(--stroke-0, #C4C4C4)" strokeWidth="0.5" x2="327" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[33px] top-[1151px] w-[327px]" data-name="view_Line 23">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327 1">
            <line id="view_Line 22" stroke="var(--stroke-0, #C4C4C4)" strokeWidth="0.5" x2="327" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white border border-[#c8c8c8] border-solid h-[48px] left-[33px] rounded-[8px] top-[645px] w-[327px]" data-name="view_Rectangle 65" />
      <div className="absolute bg-white border border-[#c8c8c8] border-solid h-[48px] left-[33px] rounded-[8px] top-[320px] w-[327px]" data-name="view_Rectangle 81" />
      <div className="absolute bg-white border border-[#c8c8c8] border-solid h-[48px] left-[33px] rounded-[8px] top-[1257px] w-[327px]" data-name="view_Rectangle 72" />
      <div className="absolute bg-white border border-[#c8c8c8] border-solid h-[48px] left-[33px] rounded-[8px] top-[1069px] w-[327px]" data-name="view_Rectangle 80" />
      <div className="absolute bg-white border border-[#c8c8c8] border-solid h-[48px] left-[33px] rounded-[8px] top-[1363px] w-[327px]" data-name="view_Rectangle 73" />
      <div className="absolute bg-white border border-[#c8c8c8] border-solid h-[48px] left-[33px] rounded-[8px] top-[1469px] w-[327px]" data-name="view_Rectangle 74" />
      <div className="absolute bg-white border border-[#c8c8c8] border-solid h-[48px] left-[33px] rounded-[8px] top-[751px] w-[327px]" data-name="view_Rectangle 66" />
      <div className="absolute bg-white border border-[#c8c8c8] border-solid h-[48px] left-[33px] rounded-[8px] top-[426px] w-[327px]" data-name="view_Rectangle 82" />
      <div className="absolute bg-white border border-[#c8c8c8] border-solid h-[48px] left-[33px] rounded-[8px] top-[857px] w-[327px]" data-name="view_Rectangle 67" />
      <div className="absolute bg-white border border-[#c8c8c8] border-solid h-[48px] left-[33px] rounded-[8px] top-[963px] w-[327px]" data-name="view_Rectangle 68" />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold h-[20px] leading-[normal] left-[53px] text-[14px] text-black top-[659px] w-[149px]">450116</p>
      <a className="absolute block font-['Montserrat:SemiBold',sans-serif] font-semibold h-[20px] leading-[0] left-[53px] text-[13px] text-black top-[334px] tracking-[0.065px] w-[149px]" href="mailto:abhi@gmail.com">
        <p className="cursor-pointer leading-[22px]">innFit@gmail.com</p>
      </a>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold h-[20px] leading-[normal] left-[53px] text-[14px] text-black top-[1271px] w-[149px]">204356XXXXXXX</p>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold h-[20px] leading-[normal] left-[53px] text-[14px] text-black top-[1377px] w-[232px]">Hoshimov Mirzohamidullo</p>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold h-[20px] leading-[normal] left-[53px] text-[14px] text-black top-[1483px] w-[149px]">SBIN00428</p>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold h-[20px] leading-[14px] left-[53px] text-[16px] text-black top-[768px] w-[184px]">{`216 This Rd, `}</p>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold h-[20px] leading-[normal] left-[53px] text-[14px] text-black top-[440px] w-[184px]">***********</p>
      <div className="absolute flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold h-[29px] justify-center leading-[0] left-[53px] text-[16px] text-black top-[882.5px] translate-y-[-50%] w-[132px]">
        <p className="leading-[14px]">Daejeon</p>
      </div>
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium h-[20px] leading-[14px] left-[53px] text-[14px] text-black top-[978px] w-[149px]">Daejeon</p>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold h-[20px] leading-[normal] left-[53px] text-[14px] text-black top-[1083px] w-[149px]">Republic of Korea</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[33px] text-[12px] text-black text-nowrap top-[615px] whitespace-pre">Pincode</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[33px] text-[12px] text-black text-nowrap top-[290px] whitespace-pre">Email Address</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[33px] text-[12px] text-black text-nowrap top-[1227px] whitespace-pre">Bank Account Number</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[33px] text-[12px] text-black text-nowrap top-[1039px] whitespace-pre">Country</p>
      <div className="absolute h-[10px] left-[329px] top-[982px] w-[20px]" data-name="view_Vector 33">
        <div className="absolute inset-[-7.07%_-3.54%_-5.86%_-3.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
            <path d={svgPaths.p2450bb80} id="view_Vector 33" stroke="var(--stroke-0, #9CA4AB)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[33px] text-[12px] text-black text-nowrap top-[1333px] whitespace-pre">Account Holder’s Name</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[33px] text-[12px] text-black text-nowrap top-[1439px] whitespace-pre">IFSC Code</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[33px] text-[12px] text-black text-nowrap top-[721px] whitespace-pre">Address</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[33px] text-[12px] text-black text-nowrap top-[396px] whitespace-pre">Password</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] absolute decoration-solid font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] left-[360px] text-[#0088ff] text-[12px] text-nowrap text-right top-[488px] translate-x-[-100%] underline whitespace-pre">Change Password</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[33px] text-[12px] text-black text-nowrap top-[827px] whitespace-pre">City</p>
      <ButtonSaveprofileSelf />
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[33px] text-[12px] text-black text-nowrap top-[933px] whitespace-pre">State</p>
      <GroupProfile />
      <GroupGroup />
      <BarsStatusBarDesignLight />
      <div className="absolute bottom-[94.69%] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%+0.5px)] text-[18px] text-black text-center text-nowrap top-[3.98%] translate-x-[-50%]">
        <p className="leading-[22px] whitespace-pre">Checkout</p>
      </div>
      <div className="absolute h-[19px] left-[22px] top-[67px] w-[9.5px]">
        <div className="absolute inset-[-3.72%_-7.44%_-3.72%_-6.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 21">
            <path d={svgPaths.p349a0648} id="Vector 3" stroke="var(--stroke-0, black)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}