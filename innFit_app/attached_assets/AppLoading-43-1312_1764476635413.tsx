import imgImage17 from "figma:asset/6349f1b1a77f13b094c3d8c8f463be342050d1c5.png";
import imgImage18 from "figma:asset/d3174e88369df0019c02a82568b5c12fb6511aa4.png";
import imgImage19 from "figma:asset/d597f602e35859114516782e14bdf2ad21abae43.png";

function BtnHome() {
  return (
    <div className="absolute h-[35px] left-0 top-[806px] w-[375px]" data-name="btnHome">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 35">
        <g id="btnHome">
          <g id="Background"></g>
          <rect fill="var(--fill-0, #A8A8A9)" height="5" id="01" rx="2.5" width="134" x="121" y="21" />
        </g>
      </svg>
    </div>
  );
}

function SwipeUp() {
  return (
    <div className="absolute contents left-0 top-[806px]" data-name="SWIPE UP">
      <BtnHome />
    </div>
  );
}

function Loading() {
  return (
    <div className="absolute h-[18px] left-[167px] top-[561px] w-[42px]" data-name="Loading">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 18">
        <g id="Loading">
          <circle cx="3" cy="15" fill="var(--fill-0, white)" id="dot" r="3" />
          <circle cx="15" cy="11" fill="var(--fill-0, white)" id="dot_2" r="3" />
          <circle cx="27" cy="3" fill="var(--fill-0, white)" id="dot_3" r="3" />
          <circle cx="39" cy="12" fill="var(--fill-0, white)" id="dot_4" r="3" />
        </g>
      </svg>
    </div>
  );
}

export default function AppLoading() {
  return (
    <div className="bg-white relative size-full" data-name="App Loading">
      <SwipeUp />
      <Loading />
      <div className="absolute h-[43px] left-[146px] top-[435px] w-[114px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
      <div className="absolute h-[23px] left-[84px] top-[487px] w-[237px]" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage18} />
      </div>
      <div className="absolute h-[79px] left-[112px] top-[332px] w-[187px]" data-name="image 19">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage19} />
      </div>
    </div>
  );
}