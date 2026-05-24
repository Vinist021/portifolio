import loadingBackground from "../shared/assets/loadingBackground.png";
import winLogo from "../shared/assets/winLogo.png";

export default function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-[50] flex items-center justify-center pointer-events-none bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${loadingBackground})` }}
    >
      <div className="flex flex-col items-center gap-[clamp(10px,2.5vw,18px)] p-[clamp(16px,4vw,32px)] text-center">
        <div className="absolute top-0 right-5 m-4 sm:text-[60px] text-[40px] !font-['Archivo_Black']">Microsoft</div>
        <img
          className="w-[90%] h-auto max-w-full"
          src={winLogo}
          alt="Windows 95 logo"
        />
        <div className="flex flex-col items-center gap-[clamp(2px,1vw,6px)]">
          <div className="flex items-baseline gap-[clamp(6px,2vw,14px)] text-[clamp(30px,7vw,64px)] leading-none text-black">
            <span className="!font-['Archivo_Black'] sm:text-[100px] text-[50px]">Windows</span>
            <span className="!font-['Archivo'] font-extralight text-white sm:text-[100px] text-[50px]">95</span>
          </div>
        </div>
      </div>
    </div>
  );
}
