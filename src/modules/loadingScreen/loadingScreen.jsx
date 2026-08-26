import loadingBackground from "../../assets/images/loadingBackground.png";
import winLogo from "../../assets/images/winLogo.png";
import { colors } from "./utils/colors.js";

export default function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-[50] flex items-center justify-center pointer-events-none bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${loadingBackground})` }}
    >
      <div className="flex flex-col items-center gap-[clamp(10px,2.5vw,18px)] p-[clamp(16px,4vw,32px)] text-center">
        <div className="absolute top-0 sm:right-5 right-2 m-4 sm:text-[60px] text-[40px] !font-['Archivo_Black']">Microsoft</div>
        <img
          className="sm:w-[50%] sm:mt-0 mt-15 w-[85%] h-auto max-w-full"
          src={winLogo}
          alt="Windows 95 logo"
        />
        <div className="flex flex-col items-center gap-[clamp(2px,1vw,6px)]">
          <div className="relative flex items-baseline gap-[clamp(6px,2vw,14px)] text-[clamp(30px,7vw,64px)] leading-none text-black sm:mt-0 mt-10">
            <span className="!font-['Archivo'] text-white text-[30px] sm:text-[50px] absolute sm:-top-8 -top-5 sm:left-0 left-1">Microsoft</span>
            <span className="!font-['Archivo_Black'] sm:text-[100px] text-[50px] sm:ml-[90px] ml-[25px]">Windows</span>
            <span className="!font-['Archivo'] font-extralight text-white sm:text-[100px] text-[50px]">95</span>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 z-[60] w-full bg-[#AFB8C0] pb-[env(safe-area-inset-bottom)]">
        <div className="relative h-[clamp(18px,2.6vw,26px)] w-full">
          <div className="absolute inset-0 overflow-hidden bg-[#AFB8C0]">
            <div className="absolute left-0 top-0 h-full w-5/7 flex animate-[win95-slide_4.0s_steps(12,start)_infinite] motion-reduce:animate-none will-change-transform">
              {colors.map((color, idx) => (
                <div
                  key={idx}
                  className="h-full"
                  style={{
                    width: '9.09%',
                    backgroundColor: color,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
