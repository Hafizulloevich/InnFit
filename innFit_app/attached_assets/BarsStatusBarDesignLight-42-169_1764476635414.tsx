import svgPaths from "./svg-p87h6q4mhq";

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
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[20px] left-0 not-italic right-[44.44%] text-[15px] text-black text-center top-[calc(50%-4.5px)]">9:41</p>
    </div>
  );
}

export default function BarsStatusBarDesignLight() {
  return (
    <div className="relative size-full" data-name="Bars / Status Bar / Design / Light">
      <Group />
      <TimeStyle />
    </div>
  );
}